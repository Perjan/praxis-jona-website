#!/usr/bin/env python3
"""Audit reviewed image paths without guessing origin or changing files."""
import argparse
import json
from pathlib import Path


def audit(root):
    registry = json.loads((root / "data/image-disclosures.json").read_text())
    images, sources = registry["images"], registry["sources"]
    missing = []
    invalid = []
    for src, source_id in images.items():
        if not src.startswith(("/images/", "/tv-legacy/")) or ".." in Path(src).parts:
            invalid.append(src)
            continue
        if not (root / "public" / src.lstrip("/")).is_file():
            missing.append(src)
        evidence = sources.get(source_id, {})
        if evidence.get("kind") not in {"ai-generated", "model"} or not evidence.get("evidence"):
            invalid.append(src)

    public_images = root / "public/images"
    unregistered_models = []
    provenance_hints = []
    for path in sorted(public_images.rglob("*")):
        if not path.is_file() or "ads" in path.relative_to(public_images).parts:
            continue
        if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
            continue
        src = "/" + path.relative_to(root / "public").as_posix()
        if "model" in path.stem.lower() and src not in images:
            unregistered_models.append(src)
        if src not in images:
            raw = path.read_bytes()
            if b"c2pa" in raw and b"trainedAlgorithmicMedia" in raw:
                provenance_hints.append(src)

    return {
        "registered_images": len(images),
        "ai_badge_images": sum(sources.get(group, {}).get("kind") == "ai-generated" for group in images.values()),
        "illustrative_image_labels": sum(sources.get(group, {}).get("kind") == "model" for group in images.values()),
        "missing_assets": missing,
        "invalid_registry_entries": sorted(set(invalid)),
        "unregistered_model_filenames": unregistered_models,
        "unregistered_ai_provenance_hints": provenance_hints,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path.cwd(), help="Repository root")
    args = parser.parse_args()
    result = audit(args.root.resolve())
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return int(any(result[key] for key in ["missing_assets", "invalid_registry_entries", "unregistered_model_filenames", "unregistered_ai_provenance_hints"]))


if __name__ == "__main__":
    raise SystemExit(main())
