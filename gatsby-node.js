const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Assuming your Markdown files are inside the `sample-content/blog` directory
    const slug = createFilePath({ node, getNode, basePath: `sample-content/blog` });
    createNodeField({
      node,
      name: 'slug',
      value: `blog/${slug.slice(12)}`, // Adjusting the slice index might be necessary based on your path structure
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const blogIndexTemplate = path.resolve(`./src/pages/blog.js`); // Ensure this file exists or adjust path as needed
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
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
    throw new Error(result.errors);
  }

  // Create individual blog posts
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Optionally, create a blog archive page
  createPage({
    path: '/blog',
    component: blogIndexTemplate,
    context: {
      posts,
    },
  });
};
