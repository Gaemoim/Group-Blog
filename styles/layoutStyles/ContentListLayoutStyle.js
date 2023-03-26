import styled from "styled-components";

export const SubVisual = styled.section`
  overflow: hidden;
`;

export const SubVisualBG = styled.div`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 1.5s ease-in-out;
  transition: all 1.5s ease-in-out;
  background-image: url("/static/images/banner.jpeg");
  background-size: cover;
  background-repeat: round;
`;

export const SubSecBGInner = styled.div`
  position: relative;
  height: 380px;
  max-width: 1200px;
  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    padding: 0 auto;
  }
  @media screen and (max-width: 1199px) {
    margin: 0 40px;
  }
`;

export const SubSecInnerIntro = styled.div`
  position: absolute;
  left: 0;
  bottom: 130px;
  animation: fadeInUp 1.5s;
  animation-delay: 1.5s;
`;

export const SubSecInnerIntroTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

export const SubSecInnerIntroDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;

export const SubSecInner = styled.div`
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

export const SubSecContent = styled.div`
  margin-top: 40px;
`;

export const SubSecSearchBar = styled.div`
  visibility: visible;
  opacity: 1;
  width: 425px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const BlogSearchBar = styled.input`
  width: 70%;
  height: 40px;
  padding: 0 0 0 10px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;
`;

export const BlogSearchTagBar = styled.select`
  width: 25%;
  height: 40px;
  padding: 0 0 0 10px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  margin: 0 10px 20px 0;
  margin-bottom: 20px;
`;

export const SecAreaUl = styled.ul`
  // margin-top: 40px;
`;

export const SecAreaLi = styled.li`
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;
`;

export const SecBox = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
  }
`;

export const ThumnailImage = styled.div`
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 500px) {
    width: 240px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

export const SecContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 500px) {
    padding-left: 40px;
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    padding-top: 16px;
    padding-left: 0;
    width: 100%;
  }
`;

export const SecContentTitleAndDesc = styled.div``;

export const SecContentTitle = styled.h3`
  font-size: 26px;
`;

export const SecContentDesc = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
`;

export const SecContentImgAndAuthor = styled.div`
  display: flex;
  gap: 10px;
`;

export const SecContentAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SecContentTagArea = styled.div`
  
`
export const SecContentTag = styled.li`
  margin-right: 10px;
  float: left;
  color: #4aa8d8;
`
