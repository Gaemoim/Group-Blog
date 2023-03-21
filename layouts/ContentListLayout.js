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
  BlogSearchTagBar,
} from "@/styles/layoutStyles/ContentListLayoutStyle";
import React, { useState } from "react";

export default function ContentListLayout({
  type,
  posts,
  initialDisplayPosts = [],
  paging,
  title,
  description,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [searchOptionValue, setSearchOptionValue] = useState("1");

  const handleSelect = (e) => {
    setSearchOptionValue(e.target.value);
  }

  const filterOptionBlogPosts = postData => {
    if (searchOptionValue === "1"){
      return postData.title + postData.summary + postData.tags.join(" ");
    } else if (searchOptionValue === "2" ) {
      return postData.authors.join(" ");
    } else if ( searchOptionValue === "3") {
      return postData.title;
    }else {
      return postData.tags.join(" ")
    }
  }

  const filteredBlogPosts = posts.filter((postData) => {
    const searchContent = filterOptionBlogPosts(postData);
    console.log(searchContent)
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

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
            <BlogSearchTagBar onChange={handleSelect} value={searchOptionValue}>
              <option value="1" >제목+내용</option>
              <option value="2">작성자</option>
              <option value="3">제목</option>
              <option value="4">내용</option>
            </BlogSearchTagBar>
            <BlogSearchBar
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search.."
            />
          </SubSecSearchBar>
          <div>
            <SecAreaUl>
              {!filteredBlogPosts.length && "No posts found."}
              {displayPosts.map((postData) => {
                const { slug, title, thumnail, summary, authors, date } =
                  postData;
                return (
                  <SecAreaLi key={slug}>
                    <CustomLink href={`/${type}/${slug}`}>
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
