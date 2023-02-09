import styled from "styled-components";

export const SubSecInner = styled.main`
  position: relative;
  max-width: 1200px;
  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    padding: 0 auto;
  }
  @media screen and (max-width: 1199px) {
    margin: 0 40px;
  }
`;

export const SubPostTitle = styled.h2`
  font-size: 28px;
`;

export const SubPostInfo = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 18px;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SubPostView = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  font-size: 1rem
  line-height: 1.75;
  @media (prefers-color-scheme: dark) {
    border-top: 1px solid #eaeaea;
  }
  @media (prefers-color-scheme: light) {
    border-top: 1px solid #4a5568;
  }
`;

export const SubPostPre = styled.pre`
  font-size: 16px;
  line-height: 1.75;
  white-space: pre;
  word-wrap: normal;
  word-break: normal;
  tab-size: 4;
  hyphens: none;
  white-space: pre-wrap;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  ol {
    list-style-type: decimal;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    padding-left: 1.625em;
  }
  img {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  code {
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 1.75;
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`;
