import styled, { createGlobalStyle } from "styled-components";

import footerImage from "../../images/footer-ground.png";

// Global Style
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  p {
    line-height: 1.6;
  }

  .blog-post {
    h2 {
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #eee;
    }

    a {
      word-break: break-all;
      text-decoration: none;
      color: #c1170c;
      &:hover {
        text-decoration: underline;
      }
    }

    code.language-text {
      background-color: rgba(27,31,35,.06);
      color: #274878;
      font-size: 0.875rem;
      padding: 0.1875rem 0.5rem;
    }

    .gatsby-highlight pre[class*="language-"] {
      position: relative;
      padding: 2em 1em 1em 1em;
      &::before {
        position: absolute;
        top: 0;
        left: 1rem;
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 0 0 0.25rem 0.25rem;
        font-size: 0.875rem;
        line-height: 1;
        text-transform: uppercase;
        font-weight: bold;
      }
      &.language-javascript::before, &.language-js::before {
        content: "js";
        background: #f7df1e;
        color: #000;
      }
      &.language-jsx::before {
        content: "jsx";
        background: #f7df1e;
        color: #000;
      }
      &.language-html::before {
        content: "html";
        background: #005a9c;
        color: #fff;
      }
      &.language-css::before {
        content: "css";
        background: #ff9800;
        color: #fff;
      }
      &.language-scss::before {
        content: "scss";
        background: #ff9800;
        color: #fff;
      }
      &.language-shell::before {
        content: "shell";
        background: #fff;
        color: #000;
      }
      &.language-bash::before {
        content: "bash";
        background: #fff;
        color: #000;
      }
    }

    blockquote {
      border-left: 4px solid #c1170c;
      line-height: 1.8;
      padding-left: 1rem;
      margin: 0 0 1.25rem 1.25rem;
    }

    img {
      max-width: 100%;
    }

    ul li {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`;

// Header
export const Header = styled.header`
  background: #333;
`;
export const HeaderWrapper = styled.div`
  padding: 1rem;
`;
export const SiteTitle = styled.h1`
  font-family: Kurewa, sans-serif;
  letter-spacing: 2px;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const SiteAvatarWrapper = styled.div`
  text-align: center;
`;
export const SiteAvatar = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 0.25rem solid #fff;
  border-radius: 50%;
  overflow: hidden;
  img {
    border-radius: 50%;
  }
`;
export const SiteDescription = styled.p`
  color: #efefef;
  text-align: center;
`;
export const SiteLinks = styled.div`
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
export const HeaderBanner = styled.nav`
  background-color: #333;
  max-width: 760px;
  margin: 0 auto;
`;
export const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;
export const NavLinkItem = styled.li`
  padding: 0;
  > a {
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 0.625rem 0.625rem;
    color: #efefef;
    transition: background-color 0.3s ease;
    @media (min-width: 375px) {
      padding: 0.625rem 0.9375rem;
    }

    &:hover,
    &.active {
      background-color: #c1170c;
    }
  }
`;

// Main Container
export const TocWrap = styled.div`
  position: relative;
`;

export const Container = styled.div`
  max-width: 792px;
  margin: 0 auto;
  padding: 1rem;
  min-height: calc(100vh - 475px);
  height: 100%;
`;

// Footer
export const Footer = styled.footer`
  height: 148px;
  background-image: url(${footerImage});
  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Copyright = styled.div`
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
