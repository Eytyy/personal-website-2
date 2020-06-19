import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import Page from "../components/page"
import SEO from "../components/seo"

export const query = graphql`
  query FrontPageQuery {
    page: sanityPage(_id: { regex: "/frontpage/" }) {
      ...PageInfo
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props
  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <Page data={data.page} />
      <SEO />
    </>
  )
}

export default IndexPage
