import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const slugify = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
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
const Pagination = styled.div`
  border: 1px solid #eee;
  margin-top: 1rem;
  margin-bottom: 1rem;
  a,
  span {
    display: inline-block;
    padding: 1rem;
    width: 50%;
    text-align: center;
  }
  a {
    color: #c1170c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background-color: #eee;
    }
  }
  span {
    color: #333;
  }
  > *:first-child {
    border-right: 1px solid #eee;
  }
  > *:last-child {
    margin-left: -1px;
  }
`;

const Home = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page${currentPage - 1}`;
  const nextPage = `/page${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="海豹人的第一個家" />
      {data.allMdx.nodes.map((node) => (
        <Post key={node.id}>
          <PostTitle>
            <Link to={`${node.fields.slug}`}>{node.frontmatter.title}</Link>
          </PostTitle>
          <PostDate>{node.frontmatter.date}</PostDate>
          <PostExcerpt>
            <Link to={`${node.fields.slug}`}>{node.frontmatter.excerpt}</Link>
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
      <Pagination>
        {!isFirst ? (
          <Link to={prevPage} rel="prev">
            ← 較新文章
          </Link>
        ) : (
          <span>← 較新文章</span>
        )}
        {!isLast ? (
          <Link to={nextPage} rel="next">
            較舊文章 →
          </Link>
        ) : (
          <span>較舊文章 →</span>
        )}
      </Pagination>
    </Layout>
  );
};

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      nodes {
        id
        fields {
          slug
        }
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

export default Home;
