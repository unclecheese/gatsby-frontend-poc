/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

const React = require('react');
const PropTypes = require('prop-types');
const { StaticQuery, graphql } = require('gatsby');
const { Helmet } = require('react-helmet');

// import { Footer } from 'layouts';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Helmet>
          <script>
            {`
              const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
              if (isIE11) {
                if (window.confirm('Your browser is not supported by this website. Try upgrading to a newer browser such as Google Chrome.')) {
                  window.location = 'https://www.google.com/chrome/';
                }
              }
              `}
          </script>
        </Helmet>
        <main>
          <div className="l-header-border" />
          {children}
          <div className="l-footer-border" />
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
