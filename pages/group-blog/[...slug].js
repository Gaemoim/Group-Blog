import fs from "fs";

import generateRss from "@/lib/generate-rss";
import {
  formatSlug,
  getAllFiles,
  getFileBySlug,
  getFiles,
} from "@/lib/mdxBundler";
import { MDXLayoutRenderer } from "@/components/MDXComponents";

export async function getStaticPaths() {
  const posts = getFiles("group-blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const type = "group-blog";
  const allPosts = await getAllFiles(type);
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug(type, params.slug.join("/"));
  const authorList = post.frontMatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { type, post, authorDetails, prev, next } };
}

export default function Blog({ type, post, authorDetails, prev, next }) {
  const { mdxSource, frontMatter } = post;
  console.log(post);
  return (
    <>
      {frontMatter.draft === false ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || "PostLayout"}
          type={type}
          frontMatter={frontMatter}
          mdxSource={mdxSource}
          prev={prev}
          next={next}
          authorDetails={authorDetails}
        />
      ) : (
        <div>Cant found</div>
      )}
    </>
  );
}
