import Image from "@/components/Image";
import { BlogSEO } from "@/components/SEO";
import siteMetaData from "@/data/siteMetaData";
import {
  SubPostInfo,
  SubPostPre,
  SubPostTitle,
  SubPostView,
  SubSecInner,
} from "@/styles/layoutStyles/PostLayoutStyle";

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, date, title, tags } = frontMatter;
  // console.log(authorDetails[0].name);
  return (
    <div>
      <BlogSEO
        url={`${siteMetaData.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <SubSecInner>
        <div>
          <SubPostTitle>{title}</SubPostTitle>
          <SubPostInfo>
            <ul>
              {authorDetails.map((author) => (
                <li className="flex items-center space-x-2" key={author.name}>
                  <span>{author.name}</span>
                </li>
              ))}
            </ul>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(
                siteMetaData.locale,
                postDateTemplate
              )}
            </time>
          </SubPostInfo>
        </div>
        <SubPostView>
          <SubPostPre>{children}</SubPostPre>
        </SubPostView>
      </SubSecInner>
    </div>
  );
}
