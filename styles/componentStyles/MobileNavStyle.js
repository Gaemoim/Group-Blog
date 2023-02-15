import styled from "styled-components";

export const HeaderMobileNav = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
  button {
    border: none;
    padding: 10px;
    background: url("/static/images/main/header_menu.png") no-repeat 50%;
    background-size: 24px auto;
  }
`;

export const FullScreenNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;

  @media (prefers-color-scheme: dark) {
    background-color: #4a5568;
  }
  @media (prefers-color-scheme: light) {
    background-color: #eaeaea;
  }
`;

export const ToggleDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: 999;
  padding: 10px;
  button {
    border: none;
    padding: 10px;
    background: url("/static/images/main/close.png") no-repeat 50%;
    background-size: 24px auto;
  }
`;

export const SecMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;
  a {
    display: block;
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
  }
`;
