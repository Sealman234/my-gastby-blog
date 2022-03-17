import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Home = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>Modified: {node.parent.modifiedTime}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        id
        slug
        parent {
          ... on File {
            modifiedTime(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;

export default Home;
