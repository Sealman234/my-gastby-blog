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
          href="https://github.com/Sealman234/MapleStoryShopV4"
          target="_blank"
          rel="noreferrer noopener"
        >
          MapleStory Shop
        </a>
      </ProjectTitle>
      <p>
        🍁 Show my LOVE for MapleStory over the years by building this website
        featuring iconic items!
      </p>
      <ProjectTitle>
        <a
          href="https://github.com/Sealman234/MaskMapV4"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mask Map
        </a>
      </ProjectTitle>
      <p>A website that show us where can we buy face masks in Taiwan.</p>
      <ProjectTitle>
        <a
          href="https://github.com/Sealman234/github-org-repos-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub Organization Repositories App
        </a>
      </ProjectTitle>
      <p>
        透過串接 GitHub REST API，讓我們可以直接快速地搜尋並瀏覽某一個
        Organization 的所有 Repository。
      </p>
    </Layout>
  );
};

export default Projects;
