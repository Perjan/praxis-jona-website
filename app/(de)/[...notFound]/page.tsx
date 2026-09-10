import { notFound } from "next/navigation";

/**
 * Catch-all that renders the German 404. Without it, a path matching no segment
 * fell through to Next's built-in bare 404, which carries no layout, no links and
 * nothing an agent can use to recover.
 *
 * Real routes always win over a catch-all, so this only ever fires on misses.
 */
export const dynamic = "force-dynamic";

export default function NotFoundCatchAll(): never {
  notFound();
}
