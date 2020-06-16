import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

import blogStyles from './blog.module.scss';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        posts:edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
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
        { data.allMarkdownRemark.posts.map(post => {
          return (
            <li className={ blogStyles.post }>
              <Link to={ `/blog/${post.node.fields.slug}` }>
                <h2>{ post.node.frontmatter.title }</h2>
              </Link>
              <p>{ post.node.frontmatter.date }</p>
            </li>
          )
        }) }
      </ol>
    </Layout>
  )
}

export default BlogPage;