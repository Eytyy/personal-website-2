import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Home from "../components/home"

export const query = graphql`
  query FrontPageQuery {
    projects: allSanityProject {
      all: nodes {
        title
        _id
        media: _rawMainMedia(resolveReferences: { maxDepth: 10 })
        description: _rawDescription
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props
  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <Home data={data?.projects?.all} />
      <SEO />
    </>
  )
}

export default IndexPage
