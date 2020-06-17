const path = require('path');

// Create new page for each new blog post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
  {  
    allContentfulBlogPost{
      edges {
        node {
          slug
        }
      }
    }
  }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        // The following is kinda like an ID
        slug: edge.node.slug
      }
    })
  })
};