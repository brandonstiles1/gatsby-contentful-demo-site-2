import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Brandon, a full-stack developer living in Atlanta.</h2>
      <Link to='blog'> Go to blog </Link>
    </Layout>
  )
};

export default IndexPage;