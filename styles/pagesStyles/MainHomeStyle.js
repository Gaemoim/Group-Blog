import styled from "styled-components";

export const SubSecInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const SubSecInnerIntro = styled.section`
  padding: 100px 0;
  width: 100%;
`;

export const SubSecColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SubSecColumnLeft = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  word-break: keep-all;
  h1 {
    font-size: calc(42px + 1.5vw);
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    padding-bottom: 45px;
    padding-top: 45px;
  }
`;

export const SubSecColumnRight = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  word-break: keep-all;
  @media (min-width: 767px) {
    padding-left: 90px;
  }
`;

export const SubColButtonArea = styled.div`
  margin-top: 30px;
  height: 48px;
  a {
    padding: 10px 20px;
    border-radius: 20px;
    align-items: center;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    background-color: #6210cc;

    &:hover {
      background-color: #4a0e9f;
    }
  }
`;

export const Spacer = styled.div`
  height: 30px;
`;

export const Devider = styled.div`
  width: 100%;
  height: 1px;

  @media (prefers-color-scheme: dark) {
    background-color: #eaeaea;
  }
  @media (prefers-color-scheme: light) {
    background-color: #e0e0e0;
  }
`;

export const SubSecLogo = styled.div`
  width: 100%;
`;

export const SubSecLogoList = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.div`
  margin: 0 20px;
  text-align: center;
  width: calc(16% - 34px);
  @media (max-width: 1024px) {
    width: calc(33.3333% - 40px);
  }
  @media (max-width: 767px) {
    width: calc(50% - 40px);
  }
`;
