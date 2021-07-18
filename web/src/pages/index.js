import React from "react"
import SEO from "../components/seo"
import Home from "../components/home"
import Layout from "../components/layout"

const IndexPage = props => {
  return (
    <>
      <Layout>
        <Home />
        <SEO />
      </Layout>
    </>
  )
}

export default IndexPage
