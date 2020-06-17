import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

import blogStyles from './blog.module.scss';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    {
      posts:allContentfulBlogPost(sort: {fields: publishedDate, order: ASC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
    }
  `
  );

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={ blogStyles.posts }>
        { data.posts.edges.map(post => {
          return (
            <li className={ blogStyles.post }>
              <Link to={ `/blog/${post.node.slug}` }>
                <h2>{ post.node.title }</h2>
              </Link>
              <p>{ post.node.publishedDate }</p>
            </li>
          )
        }) }
      </ol>
    </Layout>
  )
}

export default BlogPage;