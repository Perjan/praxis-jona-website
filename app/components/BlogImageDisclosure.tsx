/** Keep the disclosure visible wherever an AI-generated blog cover is displayed. */
export default function BlogImageDisclosure({ isAiGenerated }: { isAiGenerated?: boolean }) {
  if (!isAiGenerated) return null;

  return (
    <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-md bg-black/80 px-2.5 py-1.5 text-xs font-medium leading-4 text-white">
      KI-generiertes Bild
    </span>
  );
}
