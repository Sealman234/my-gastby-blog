import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Projects" pathname="projects" />
      <Heading>Projects</Heading>
      <ProjectTitle>
        <a
          href="https://javascript.sealman.tw"
          target="_blank"
          rel="noreferrer noopener"
        >
          克服 JavaScript 的奇怪部分
        </a>
      </ProjectTitle>
      <p>
        這個系列文章是 JavaScript: Understanding the Weird Parts
        課程的學習筆記。
      </p>
      <ProjectTitle>
        <a
          href="https://react.sealman.tw/"
          target="_blank"
          rel="noreferrer noopener"
        >
          React Complete Note
        </a>
      </ProjectTitle>
      <p>
        這個系列文章是 React - The Complete Guide (incl Hooks, React Router,
        Redux) 課程的學習筆記。
      </p>
      <p>此筆記內容目前尚未整理完成。</p>
    </Layout>
  );
};

export default Projects;
