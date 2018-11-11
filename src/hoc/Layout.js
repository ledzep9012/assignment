import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <strong>Random Quotes App</strong>
      </div>
      <div className="body">
        {children}
      </div>
      {/* Footer */}
      <div className="footer">
        Project bootstrapped with Create-React-App
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
