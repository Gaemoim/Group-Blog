import { getAllFiles } from "@/lib/mdxBundler";
import siteMetaData from "@/data/siteMetaData";
import { PageSEO } from "@/components/SEO";
import ContentListLayout from "@/layouts/ContentListLayout";

export const DEFAULT_PAGE_SIZE = 10;

export async function getStaticProps() {
  const type = "group-blog";
  const posts = await getAllFiles("group-blog");
  const initialDisplayPosts = posts.slice(0, DEFAULT_PAGE_SIZE);
  const paging = {
    current: 1,
    total: Math.ceil(posts.length / DEFAULT_PAGE_SIZE),
  };

  return {
    props: {
      type,
      posts,
      initialDisplayPosts,
      paging,
    },
  };
}

export default function Blog({ type, posts, initialDisplayPosts, paging }) {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetaData.author}`}
        description={siteMetaData.description}
      />
      <ContentListLayout
        type={type}
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        paging={paging}
        title="그룹 블로그"
        description="우린 이런 것들을 하고 있어요"
      />
    </>
  );
}
