import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Global from "../../styles/Global.js"
import { LayoutWrapper } from "./styles"

import Header from "../header"
import Navigation from "../navigation/index.js"

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Layout = ({ children, location }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Global />
      <LayoutWrapper>
        <Header location={location} siteTitle={data.site.siteMetadata.title} />
        <Navigation />

        <main>{children}</main>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
