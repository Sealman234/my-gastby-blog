import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const slugify = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
const Post = styled.article`
  border-bottom: 1px solid #eee;
  margin-top: 1rem;
  padding-bottom: 1rem;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 1rem;
  }
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

const tag = ({ data, pageContext }) => {
  const { nodes: posts } = data.allMdx;
  const { tag } = pageContext;

  return (
    <Layout>
      <Seo title={tag} pathname={`tags/${slugify(tag)}`} />
      <Heading>#{tag}</Heading>
      {posts.map((post) => (
        <Post key={post.id}>
          <PostTitle>
            <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
          </PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
          <PostExcerpt>
            <Link to={`/${post.slug}`}>{post.frontmatter.excerpt}</Link>
          </PostExcerpt>
          <PostTags>
            {post.frontmatter.tags.length > 0 &&
              post.frontmatter.tags.map((tag) => (
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
  query ($tag: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { glob: "**/blog/**/*" }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          excerpt
          tags
        }
      }
    }
  }
`;

export default tag;
