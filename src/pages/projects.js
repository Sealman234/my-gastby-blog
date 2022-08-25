import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
const ProjectTitle = styled.h3`
  > a {
    color: #000;
    text-decoration: underline;
    &:hover {
      color: #c1170c;
    }
  }
`;

const Projects = () => {
  return (
    <Layout>
      <Seo title="Projects" pathname="projects" />
      <Heading>Projects</Heading>
      <ProjectTitle>
        <a
          href="https://react.sealman.tw"
          target="_blank"
          rel="noreferrer noopener"
        >
          📘 React Book
        </a>
      </ProjectTitle>
      <p>
        我的 React 學習筆記，是以我修習 React - The Complete Guide (incl Hooks,
        React Router, Redux) 這門課程的筆記為基礎結構，持續補充與整理 React
        的相關觀念。
      </p>
      <ProjectTitle>
        <a
          href="https://javascript.sealman.tw"
          target="_blank"
          rel="noreferrer noopener"
        >
          📙 JavaScript Book
        </a>
      </ProjectTitle>
      <p>
        這是我的 JavaScript 學習筆記，主要包含我修習 JavaScript: Understanding
        the Weird Part 這門課程的筆記內容，說明 JavaScript
        背後的運作原理與邏輯，同時也會持續整理 ECMAScript 的更新內容進來。
      </p>
      <ProjectTitle>
        <a
          href="https://sealman234.github.io/MapleStoryShopV4"
          target="_blank"
          rel="noreferrer noopener"
        >
          🍁 MapleStory Shop
        </a>
      </ProjectTitle>
      <p>
        Show my LOVE for MapleStory over the years by building this website
        featuring iconic items! Made with Vue 2 and Vuex.
      </p>
      <ProjectTitle>
        <a
          href="https://sealman234.github.io/MaskMapV4"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mask Map
        </a>
      </ProjectTitle>
      <p>
        A website that show us where can we buy face masks in Taiwan. Made with
        Vue 2, OpenStreetMap, and Leaflet.
      </p>
      <ProjectTitle>
        <a
          href="https://github-org-repos-app.web.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub Organization Repositories App
        </a>
      </ProjectTitle>
      <p>
        透過串接 GitHub REST API，讓我們可以直接搜尋與瀏覽特定 Organization
        的所有 Repository。
      </p>
    </Layout>
  );
};

export default Projects;
