const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const resultPosts = await graphql(
    `
      {
        allMdx(
          filter: { internal: { contentFilePath: { glob: "**/blog/**/*" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `,
  );
  const resultTags = await graphql(
    `
      {
        allMdx(
          filter: { internal: { contentFilePath: { glob: "**/blog/**/*" } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          group(field: { frontmatter: { tags: SELECT } }) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `,
  );

  // Handle errors
  if (resultPosts.errors || resultTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Make post pages
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  resultPosts.data.allMdx.edges.forEach(({ node }) => {
    const path = node.fields.slug;
    const id = node.id;
    createPage({
      path,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id,
      },
    });
  });

  // Make tag pages
  const TagTemplate = path.resolve(`src/templates/tag.js`);
  resultTags.data.allMdx.group.forEach(async ({ tag, totalCount }) => {
    const kebab = tag.replace(/\s+/g, "-").toLowerCase();
    const path = `/tags/${kebab}`;
    createPage({
      path,
      component: TagTemplate,
      context: {
        tag,
        totalCount,
      },
    });
  });

  // Make home pages
  const homePages = resultPosts.data.allMdx.edges;
  const postsPerPage = 10;
  const numPages = Math.ceil(homePages.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page${i + 1}`,
      component: path.resolve("./src/templates/home.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
