import { ToolPage, toolsMetadata } from 'app/free-tools/ToolPages';
import { tools } from 'app/free-tools/definition';
export const dynamicParams = false;
export function generateStaticParams() { return tools.map(tool => ({ slug: tool.de })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { return toolsMetadata('de', (await params).slug); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { return <ToolPage locale="de" slug={(await params).slug} />; }
