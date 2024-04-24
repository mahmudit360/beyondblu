const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              langKey
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        langKey: post.node.fields.langKey,
        previous,
        next,
      },
    });
  });

  // Optionally, create a blog archive page
  createPage({
    path: '/blog',
    component: path.resolve(`./src/pages/blog.js`) // Ensure you have a blog.js file
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Ensure we are processing only markdown files
  if (node.internal.type === `MarkdownRemark`) {
    // Use `createFilePath` to turn markdown files in our `src/pages` into `/slug/`
    const value = createFilePath({ node, getNode });
    // Create a new field in the node being processed
    createNodeField({
      node,
      name: 'slug',
      value,
    });
  }
};
