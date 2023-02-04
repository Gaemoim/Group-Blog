import { BlogSEO } from "@/components/SEO";
import siteMetaData from "@/data/siteMetaData";

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, date, title, tags } = frontMatter;
  return (
    <div>
      <BlogSEO
        url={`${siteMetaData.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div>
          <div>
            <div>{title}</div>
            <div>{date}</div>
          </div>
          <div>
            <div>{children}</div>
          </div>
        </div>
      </article>
    </div>
  );
}
