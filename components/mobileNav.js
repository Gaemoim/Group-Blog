import { useState } from "react";
import CustomLink from "./Link";
import headerNavLinks from "@/data/headerNavLinks";
import {
  FullScreenNav,
  HeaderMobileNav,
  SecMobileNav,
  ToggleDiv,
} from "@/styles/componentStyles/MobileNavStyle";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <HeaderMobileNav>
      <button type="button" onClick={onToggleNav}></button>
      {navShow ? (
        <FullScreenNav>
          <ToggleDiv>
            <button type="button" onClick={onToggleNav}></button>
          </ToggleDiv>
          <SecMobileNav>
            {headerNavLinks.map((link) => (
              <CustomLink
                href={link.href}
                key={link.title}
                onClick={onToggleNav}
              >
                {link.title}
              </CustomLink>
            ))}
          </SecMobileNav>
        </FullScreenNav>
      ) : null}
    </HeaderMobileNav>
  );
};

export default MobileNav;
