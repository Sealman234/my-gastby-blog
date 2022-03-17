const { log } = require('console');
const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }) {
          edges {
            node {
              id
              slug
              body
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  result.data.allMdx.edges.forEach(({ node }) => {
    const path = node.slug;
    const data = node;
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        data,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const TagTemplate = path.resolve(`src/templates/tag.js`);
  result.data.allMdx.group.forEach(({ tag, totalCount }) => {
    const kebab = tag.replace(/\s+/g, '-').toLowerCase();
    const path = `/tags/${kebab}`;
    createPage({
      path,
      component: TagTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        tag,
        totalCount,
      },
    });
  });
};
