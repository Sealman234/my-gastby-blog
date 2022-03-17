import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const currentYear = new Date().getFullYear();
const yearList = [];
for (let year = currentYear; year >= 2019; year -= 1) {
  yearList.push(`${year}`);
}

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #c1170c;
`;

const Archives = ({ data }) => {
  return (
    <Layout pageTitle="歸檔">
      <Heading>Archives</Heading>
      <p>目前總共有 {data.allMdx.totalCount} 篇文章 d(`･∀･)b</p>
      {yearList.map((year) => (
        <div key={year}>
          <h3>{year}</h3>
          <ul>
            {data.allMdx.nodes.map(
              (node) =>
                node.frontmatter.year === year && (
                  <li key={node.id} style={{ paddingBottom: '0.25rem' }}>
                    <span>{node.frontmatter.month}</span>{' '}
                    <PostLink to={`/${node.slug}`}>
                      {node.frontmatter.title}
                    </PostLink>
                  </li>
                )
            )}
          </ul>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          month: date(formatString: "MMMM")
          year: date(formatString: "YYYY")
        }
      }
      totalCount
    }
  }
`;

export default Archives;
