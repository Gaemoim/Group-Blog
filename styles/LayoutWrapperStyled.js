import styled from "styled-components";

export const MainHeader = styled.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 80px;
  padding: 0 40px;
`;

export const HeaderNav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 20px;
`;

export const HeaderMenuLi = styled.li`
  float: left;
  position: relative;
  overflow: hidden;
`;

export const HeaderMenuLink = styled.h2`
  display: block;
  position: relative;
  margin: 30px 40px;
  font-size: 16px;
`;
