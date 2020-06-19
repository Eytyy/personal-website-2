import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Global from "../styles/Global.js"
import { LayoutWrapper } from "../styles/layout"

import Header from "./header"

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Global />
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>🥴 © {new Date().getFullYear()}</footer>
        </div>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
