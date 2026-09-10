import { notFound } from "next/navigation";

/** Catch-all that renders the English 404 for unmatched /en/* paths. */
export const dynamic = "force-dynamic";

export default function NotFoundCatchAll(): never {
  notFound();
}
