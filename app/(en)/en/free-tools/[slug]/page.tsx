import { ToolPage, toolsMetadata } from 'app/free-tools/ToolPages';
import { tools } from 'app/free-tools/definition';
export const dynamicParams = false;
export function generateStaticParams() { return tools.map(tool => ({ slug: tool.en })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { return toolsMetadata('en', (await params).slug); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { return <ToolPage locale="en" slug={(await params).slug} />; }
