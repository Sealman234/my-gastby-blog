import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';

const slugify = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
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

const BlogPost = ({ pageContext }) => {
  const data = pageContext.data;
  const image = getImage(data.frontmatter.hero_image);

  return (
    <Layout>
      <Seo
        title={data.frontmatter.title}
        description={data.frontmatter.excerpt}
        image={image}
        pathname={data.slug}
      />
      <article className="blog-post">
        <PostTitle>{data.frontmatter.title}</PostTitle>
        <PostDate>{data.frontmatter.date}</PostDate>
        <p>{data.frontmatter.excerpt}</p>
        <PostTags>
          {data.frontmatter.tags.length > 0 &&
            data.frontmatter.tags.map((tag) => (
              <Link key={tag} to={`/tags/${slugify(tag)}`}>
                #{tag}
              </Link>
            ))}
        </PostTags>
        {image && (
          <Fragment>
            <GatsbyImage image={image} alt={data.frontmatter.hero_image_alt} />
            <p>
              Photo Credit:{' '}
              <a href={data.frontmatter.hero_image_credit_link}>
                {data.frontmatter.hero_image_credit_text}
              </a>
            </p>
          </Fragment>
        )}
        <MDXRenderer>{data.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default BlogPost;
