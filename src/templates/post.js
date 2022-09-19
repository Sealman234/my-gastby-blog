import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import ToC from "../components/ToC";

const slugify = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};

const PostTitle = styled.h1`
  margin-bottom: 0;
`;
const PostDate = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin: 0;
`;
const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  a.tag {
    text-decoration: none;
    color: #666;
    background-color: #efefef;
    padding: 0.125rem 0.25rem;
    border-radius: 0.3125rem;
    white-space: nowrap;
    &:hover {
      text-decoration: none;
      color: #c1170c;
    }
  }
`;

const BlogPost = ({ data }) => {
  const post = data.allMdx.nodes[0];
  const image = getImage(post.frontmatter.hero_image);
  const metaImage = image
    ? {
        src: image.images.fallback.src,
        width: image.width,
        height: image.height,
      }
    : null;
  const { tableOfContents } = post;

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        image={metaImage}
        pathname={post.slug}
      />
      <article className="blog-post">
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <p>{post.frontmatter.excerpt}</p>
        <PostTags>
          {post.frontmatter.tags.length > 0 &&
            post.frontmatter.tags.map((tag) => (
              <Link key={tag} to={`/tags/${slugify(tag)}`} className="tag">
                #{tag}
              </Link>
            ))}
        </PostTags>
        {image && (
          <Fragment>
            <GatsbyImage image={image} alt={post.frontmatter.hero_image_alt} />
            {post.frontmatter.hero_image_credit_link &&
              post.frontmatter.hero_image_credit_text && (
                <p>
                  Photo Credit:{" "}
                  <a href={post.frontmatter.hero_image_credit_link}>
                    {post.frontmatter.hero_image_credit_text}
                  </a>
                </p>
              )}
          </Fragment>
        )}
        <ToC toc={tableOfContents} />
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allMdx(
      filter: { fileAbsolutePath: { glob: "**/blog/**/*" }, id: { eq: $id } }
    ) {
      nodes {
        id
        slug
        body
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          excerpt
          tags
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData(formats: [PNG, AUTO])
            }
          }
        }
        tableOfContents(maxDepth: 3)
      }
    }
  }
`;

export default BlogPost;
