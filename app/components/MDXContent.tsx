import { useMDXComponent } from 'next-contentlayer/hooks';
import type { ComponentProps } from 'react';

type MDXComponentProps = ComponentProps<ReturnType<typeof useMDXComponent>>;

export function MDXContent({ code, components }: { code: string; components?: MDXComponentProps['components'] }) {
  const Content = useMDXComponent(code);
  // False positive: Contentlayer compiles each MDX body to a component at runtime, and
  // useMDXComponent memoizes it on `code`, so its identity is stable between renders.
  // eslint-disable-next-line react-hooks/static-components
  return <Content components={components} />;
}
