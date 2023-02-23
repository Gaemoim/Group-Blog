import { PageSEO } from "@/components/SEO";
import siteMetaData from "@/data/siteMetaData";

import {
  Devider,
  Spacer,
  SubSecColumn,
  SubSecColumnLeft,
  SubSecColumnRight,
  SubSecInner,
  SubSecInnerIntro,
  Logo,
  SubSecLogoList,
  SubSecLogo,
  SubColButtonArea,
} from "@/styles/pagesStyles/MainHomeStyle";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({ posts }) {
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setWidth(380);
        setHeight(250);
      } else if (window.innerWidth < 1024) {
        setWidth(340);
        setHeight(210);
      } else {
        setWidth(540);
        setHeight(360);
      }
    }
    window.addEventListener("resize", handleResize);
    return (_) => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <PageSEO
        title={siteMetaData.title}
        description={siteMetaData.description}
      />
      <SubSecInner>
        <SubSecInnerIntro>
          <SubSecColumn>
            <SubSecColumnLeft>
              <h1>개발이 외롭다 느껴지면 이곳으로 오세요</h1>
              <p>
                전국 각지에서 떨어져 홀로 개발을 공부하다 보면, 외로움에
                지치기도, 길을 잃을 수도 있어요. 각자의 탐험 속에 서로가 서로의
                나침반이 되어 같이 모험을 떠나봅시다.
              </p>
              <SubColButtonArea>
                <a href="https://discord.gg/5dKVjN7rvj">
                  <span>Discord로 함께하기</span>
                </a>
              </SubColButtonArea>
            </SubSecColumnLeft>
            <SubSecColumnRight>
              <Image
                src={"/static/images/main/mainIntro.png"}
                alt="main intro"
                width={width}
                height={height}
              />
            </SubSecColumnRight>
          </SubSecColumn>
        </SubSecInnerIntro>
        <Spacer></Spacer>
        <SubSecLogo>
          <Devider></Devider>
          <Spacer></Spacer>
          <SubSecLogoList>
            <Logo>
              <Image
                src="/static/images/javascript/javascriptLogo.png"
                alt="js logo"
                width={100}
                height={70}
              />
            </Logo>
            <Logo>
              <Image
                src="/static/images/nodejs/nodejsLogo.png"
                alt="js logo"
                width={100}
                height={70}
              />
            </Logo>
            <Logo>
              <Image
                src="/static/images/nestjs/nestjsLogo.svg"
                alt="js logo"
                width={100}
                height={70}
              />
            </Logo>
            <Logo>
              <Image
                src="/static/images/mariadb/mariadbLogo.png"
                alt="js logo"
                width={100}
                height={70}
              />
            </Logo>
            <Logo>
              <Image
                src="/static/images/react/reactLogo.png"
                alt="js logo"
                width={100}
                height={70}
              />
            </Logo>
          </SubSecLogoList>
          <Spacer></Spacer>
          <Devider></Devider>
        </SubSecLogo>
      </SubSecInner>
    </>
  );
}
