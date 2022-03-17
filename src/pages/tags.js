import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TagLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #c1170c;
  }
`;

const slugify = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
};

const Tags = ({ data }) => {
  const tags = data.allMdx.group.map(({ tag, totalCount }) => {
    return {
      tag: tag,
      kebab: slugify(tag),
      totalCount: totalCount,
    };
  });

  return (
    <Layout pageTitle="Tags">
      <Heading>Tags</Heading>
      <p>目前總共有 {tags.length} 個標籤 (`・ω・´)</p>
      <ul>
        {tags.map(({ tag, kebab, totalCount }) => (
          <li key={tag} style={{ paddingBottom: '0.25rem' }}>
            <TagLink to={`/tags/${kebab}`}>
              {tag} ({totalCount})
            </TagLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
