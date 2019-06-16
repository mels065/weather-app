import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="Layout" className="container-fluid" data-testid="layout">
    <Header />
    <main id="Content">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
