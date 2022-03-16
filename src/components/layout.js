import React, { Fragment } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import footerImage from '../images/footer-ground.png';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 1.25rem;
  min-height: calc(100vh - 148px);
  height: 100%;
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  text-align: center;
  a {
    text-decoration: none;
    color: #c1170c;
  }
`;
const SiteAvatarWrapper = styled.div`
  text-align: center;
`;
const SiteAvatar = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;
const SiteDescription = styled.p`
  text-align: center;
  font-style: italic;
`;
const SiteLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;
const NavLinkItem = styled.li`
  padding-right: 2rem;
  &:last-of-type {
    padding-right: 0;
  }
`;
const NavLinkText = styled(Link)`
  text-decoration: none;
  color: #000;
  &.active {
    color: #c1170c;
  }
`;

const Heading = styled.h2`
  color: rebeccapurple;
`;

const Footer = styled.footer`
  height: 148px;
  background-image: url(${footerImage});
  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Copyright = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.6);
  font-style: italic;
  letter-spacing: 0.5px;
  color: #fff;
  background: #332200;
  text-align: center;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15);
  border-radius: 0.25rem;
  border: 1px solid #221111;
  padding: 0.25rem;
  width: 80%;
  opacity: 0.9;
  @media (min-width: 600px) {
    width: 60%;
  }
  a {
    text-decoration: underline;
    color: #fff;
  }
`;

const Layout = ({ pageTitle, children }) => {
  // useStaticQuery
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header>
          <SiteTitle>
            <Link to="/">海豹人的第一個家</Link>
          </SiteTitle>
          <SiteAvatarWrapper>
            <SiteAvatar>
              <StaticImage
                src="../images/avatar.jpeg"
                alt="Sealman"
                width={100}
                height={100}
              />
            </SiteAvatar>
          </SiteAvatarWrapper>
          <SiteDescription>
            前端工程師，喜歡 San-X
            的まめゴマ、旅遊和吃美食，這裡紀錄了我的學習和開發筆記。
          </SiteDescription>
          <SiteDescription>
            本部落格使用 <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>{' '}
            製作
          </SiteDescription>
          <SiteDescription>本部落格有使用 Google Analytics</SiteDescription>
          <SiteLinks>
            <a
              href="https://www.linkedin.com/in/sealman"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/icon-linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://github.com/Sealman234"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/icon-github.svg"
                alt="GitHub"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://twitter.com/castle2668"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/icon-twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </SiteLinks>
          <nav>
            <NavLinks>
              <NavLinkItem>
                <NavLinkText activeClassName="active" to="/">
                  首頁
                </NavLinkText>
              </NavLinkItem>
              <NavLinkItem>
                <NavLinkText activeClassName="active" to="/blog">
                  歸檔
                </NavLinkText>
              </NavLinkItem>
              <NavLinkItem>
                <NavLinkText activeClassName="active" to="/blog">
                  標籤
                </NavLinkText>
              </NavLinkItem>
              <NavLinkItem>
                <NavLinkText activeClassName="active" to="/about">
                  關於我
                </NavLinkText>
              </NavLinkItem>
            </NavLinks>
          </nav>
        </header>
        <main>
          <Heading>{pageTitle}</Heading>
          {children}
        </main>
      </Container>
      <Footer>
        <Copyright>
          Copyright © by <a href="https://sealman234.github.io/">Sealman</a>.
          <br />
          All images and other content related to MapleStory are owned by Nexon
          Corporation.
        </Copyright>
      </Footer>
    </Fragment>
  );
};

export default Layout;
