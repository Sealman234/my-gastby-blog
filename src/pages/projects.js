import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/seo";

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
          href="https://sealman234.github.io/maplestory-shop"
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
          href="https://sealman234.github.io/mask-map"
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
