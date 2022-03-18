import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const slugify = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
};

const Post = styled.article`
  border-bottom: 1px solid #eee;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

const PostTitle = styled.h2`
  margin: 0;
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostDate = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin: 0;
`;

const PostExcerpt = styled.p`
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #666;
    background-color: #efefef;
    padding: 0.125rem 0.25rem;
    border-radius: 0.3125rem;
    white-space: nowrap;
    &:hover {
      color: #c1170c;
    }
  }
`;

const Home = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Post key={node.id}>
          <PostTitle>
            <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
          </PostTitle>
          <PostDate>{node.frontmatter.date}</PostDate>
          <PostExcerpt>
            <Link to={`/${node.slug}`}>{node.excerpt}</Link>
          </PostExcerpt>
          <PostTags>
            {node.frontmatter.tags.length > 0 &&
              node.frontmatter.tags.map((tag) => (
                <Link key={tag} to={`/tags/${slugify(tag)}`}>
                  #{tag}
                </Link>
              ))}
          </PostTags>
        </Post>
      ))}
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
          tags
        }
        id
        excerpt
        slug
      }
    }
  }
`;

export default Home;
