import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Page from "../components/page"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      page {
        ...PageInfo
      }
      openGraph {
        ...OpenGraph
      }
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const page = data.route.page
  const seoSettings = data.route.openGraph
  const pageTitle = data.route.openGraph.title || page.title

  return (
    <>
      <SEO {...seoSettings} title={pageTitle} />
      <Page data={page} />
    </>
  )
}

export default PageTemplate
