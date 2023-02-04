import Image from "@/components/Image";
import CustomLink from "@/components/Link";
import formatDate from "@/lib/utils/formatDate";
import {
  BlogSearchBar,
  SubSecContent,
  SubSecBGInner,
  SubSecInner,
  SubSecInnerIntro,
  SubSecSearchBar,
  SubVisual,
  SubVisualBG,
  ThumnailImage,
  SecAreaUl,
  SecBox,
  SecAreaLi,
  SecContent,
  SecContentTitle,
  SecContentDesc,
  SecContentAuthor,
  SecContentTitleAndDesc,
  SubSecInnerIntroTitle,
  SubSecInnerIntroDesc,
} from "@/styles/layoutStyles/ContentListLayoutStyle";
import React, { useState } from "react";

export default function ContentListLayout({
  posts,
  initialDisplayPosts = [],
  paging,
  title,
  description,
}) {
  const [searchValue, setSearchValue] = useState("");
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts;
  return (
    <SubVisual>
      <SubVisualBG>
        <SubSecBGInner>
          <SubSecInnerIntro>
            <SubSecInnerIntroTitle data-animate="fadeInUp" data-delay="1.5s">
              {title}
            </SubSecInnerIntroTitle>
            <SubSecInnerIntroDesc>{description}</SubSecInnerIntroDesc>
          </SubSecInnerIntro>
        </SubSecBGInner>
      </SubVisualBG>
      <SubSecContent>
        <SubSecInner>
          <SubSecSearchBar>
            <BlogSearchBar
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search.."
            />
          </SubSecSearchBar>
          <div>
            <SecAreaUl>
              {displayPosts.map((postData) => {
                const { slug, title, thumnail, summary, authors, date } =
                  postData;
                return (
                  <SecAreaLi key={slug}>
                    <CustomLink href={`/blog/${slug}`}>
                      <SecBox>
                        <ThumnailImage>
                          <Image
                            alt={title}
                            src={thumnail}
                            width={400}
                            height={180}
                          />
                        </ThumnailImage>
                        <SecContent>
                          <SecContentTitleAndDesc>
                            <SecContentTitle>{title}</SecContentTitle>
                            <SecContentDesc>{summary}</SecContentDesc>
                          </SecContentTitleAndDesc>
                          <SecContentAuthor>
                            <time dateTime={date}>{formatDate(date)}</time>
                            <p>{authors}</p>
                          </SecContentAuthor>
                        </SecContent>
                      </SecBox>
                    </CustomLink>
                  </SecAreaLi>
                );
              })}
            </SecAreaUl>
          </div>
        </SubSecInner>
      </SubSecContent>
    </SubVisual>
  );
}
