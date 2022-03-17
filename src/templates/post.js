import React from 'react';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({ pageContext }) => {
  const data = pageContext.data;
  const image = getImage(data.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.frontmatter.title}>
      <p>{data.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.frontmatter.hero_image_credit_link}>
          {data.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;
