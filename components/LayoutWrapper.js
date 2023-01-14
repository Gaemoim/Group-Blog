import siteMetaData from "@/data/siteMetaData";
import headerNavLinks from "@/data/headerNavLinks";
import CustomLink from "./Link";
import {
  HeaderMenuLi,
  HeaderMenuLink,
  HeaderNav,
  MainHeader,
} from "@/styles/LayoutWrapperStyled";

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <MainHeader>
        <div>
          <CustomLink href="/" aria-label={siteMetaData.headerTitle}>
            <h1>{siteMetaData.headerTitle}</h1>
          </CustomLink>
        </div>
        <HeaderNav>
          <ul>
            {headerNavLinks.map((link) => (
              <CustomLink href={link.href} key={link.label}>
                <HeaderMenuLi>
                  <HeaderMenuLink>{link.label}</HeaderMenuLink>
                </HeaderMenuLi>
              </CustomLink>
            ))}
          </ul>
        </HeaderNav>
      </MainHeader>
    </div>
  );
};

export default LayoutWrapper;
