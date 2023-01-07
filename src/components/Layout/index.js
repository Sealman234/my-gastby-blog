import React, { Fragment } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as Style from "./style";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Style.GlobalStyle />
      <Style.Header>
        <Style.HeaderWrapper>
          <Style.SiteTitle>
            <Link to="/">海豹人的第一個家</Link>
          </Style.SiteTitle>
          <Style.SiteAvatarWrapper>
            <Style.SiteAvatar>
              <StaticImage
                src="../../images/avatar.jpeg"
                alt="Sealman"
                width={100}
                height={100}
              />
            </Style.SiteAvatar>
          </Style.SiteAvatarWrapper>
          <Style.SiteDescription>
            Frontend Engineer / Taiwanese / Passion Comes From Mastery
          </Style.SiteDescription>
          <Style.SiteLinks>
            <a
              href="https://www.linkedin.com/in/sealman"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../../images/icon-linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/sealman234"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage src="../../images/icon-github.svg" alt="GitHub" />
            </a>
          </Style.SiteLinks>
        </Style.HeaderWrapper>
        <Style.HeaderBanner>
          <Style.NavLinks>
            <Style.NavLinkItem>
              <Link activeClassName="active" to="/">
                首頁
              </Link>
            </Style.NavLinkItem>
            <Style.NavLinkItem>
              <Link activeClassName="active" to="/archives">
                歸檔
              </Link>
            </Style.NavLinkItem>
            <Style.NavLinkItem>
              <Link activeClassName="active" to="/tags" partiallyActive={true}>
                標籤列表
              </Link>
            </Style.NavLinkItem>
            <Style.NavLinkItem>
              <Link activeClassName="active" to="/projects">
                專案
              </Link>
            </Style.NavLinkItem>
            <Style.NavLinkItem>
              <Link activeClassName="active" to="/about">
                關於我
              </Link>
            </Style.NavLinkItem>
          </Style.NavLinks>
        </Style.HeaderBanner>
      </Style.Header>
      <Style.TocWrap>
        <Style.Container>
          <main>{children}</main>
        </Style.Container>
      </Style.TocWrap>
      <Style.Footer>
        <Style.Copyright>
          Copyright © 2019-2023{" "}
          <a href="https://github.com/sealman234">Sealman</a>. All rights
          reserved.
          <br />
          All images and other content related to MapleStory are owned by Nexon
          Corporation.
        </Style.Copyright>
      </Style.Footer>
    </Fragment>
  );
};

export default Layout;
