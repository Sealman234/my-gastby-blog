import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Heading = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const tag = ({ pageContext }) => {
  const { posts, tag } = pageContext;

  return (
    <Layout pageTitle={tag}>
      <Heading>#{tag}</Heading>
      <ul>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <p>Posted: {post.frontmatter.date}</p>
            {post.frontmatter.tags.length > 0 && (
              <p>
                Tags:{' '}
                {[post.frontmatter.tags.map((tag) => <span>#{tag}</span>)]}
              </p>
            )}
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export default tag;
