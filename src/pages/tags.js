import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/seo";

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
  return str.replace(/\s+/g, "-").toLowerCase();
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
    <Layout>
      <Seo title="標籤列表" pathname="tags" />
      <Heading>Tags</Heading>
      <p>目前總共有 {tags.length} 個標籤 (`・ω・´)</p>
      <ul>
        {tags.map(({ tag, kebab, totalCount }) => (
          <li key={tag} style={{ marginBottom: "0.25rem" }}>
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
    allMdx(
      filter: { internal: { contentFilePath: { glob: "**/blog/**/*" } } }
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
