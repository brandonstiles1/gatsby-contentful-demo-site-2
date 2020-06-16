import React from 'react';

// Import components
import Header from './header';
import Footer from './Footer';

// Import Styles
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={ layoutStyles.container }>
      <div className={ layoutStyles.content }>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;