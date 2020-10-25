import React from "react"
import { graphql } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Home from "../components/Home/Home"

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
      <Home data={data.page} />
      <SEO />
    </>
  )
}

export default IndexPage
