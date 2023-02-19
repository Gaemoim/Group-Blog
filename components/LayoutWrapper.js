import siteMetaData from "@/data/siteMetaData";
import headerNavLinks from "@/data/headerNavLinks";
import CustomLink from "./Link";
import {
  HeaderMenuLi,
  HeaderMenuLink,
  HeaderNav,
  MainHeader,
} from "@/styles/componentStyles/LayoutWrapperStyled";
import MobileNav from "./mobileNav";

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
              <CustomLink href={link.href} key={link.title}>
                <HeaderMenuLi>
                  <HeaderMenuLink>{link.title}</HeaderMenuLink>
                </HeaderMenuLi>
              </CustomLink>
            ))}
          </ul>
        </HeaderNav>
        <MobileNav />
      </MainHeader>
      <main>{children}</main>
    </div>
  );
};

export default LayoutWrapper;
