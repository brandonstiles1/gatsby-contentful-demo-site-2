import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Import components
import Layout from '../components/layout';


// Query Contentful for data
export const query = graphql`
  query($slug: String!){
    post:contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      postBody {
        json
      }
    }   
  }
`;


const Blog = (props) => {
  const { post } = props.data;
  // Insert an image 
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title('en-US'),
        const url = node.data.target.fields.file.('en-US').url,
        return <img alt={ alt } src={ url } />
      }
    }
  }

  return (
    <Layout>
      <h1>{ post.title }</h1>
      <p>{ post.publishedDate }</p>
      { documentToReactComponents(post.postBody.json, options) }
    </Layout>
  );
}

export default Blog;