import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./Image";
import CustomLink from "./Link";

export const MDXComponents = {
  Image,
  a: CustomLink,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const Layout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return <Layout layout={layout} components={MDXComponents} {...rest} />;
};
