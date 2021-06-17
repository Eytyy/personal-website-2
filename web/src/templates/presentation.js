import React from "react"
import { graphql } from "gatsby"
import Presentation from "../components/presentation"

export const query = graphql`
  query GetPresentation($id: String!) {
    presentation: sanityPresentation(id: { eq: $id }) {
      id
      title
      scope
      date
      content: _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`
const PresentationTemplate = ({ data }) => {
  const presentation = data && data.presentation
  return <Presentation {...presentation} />
}

export default PresentationTemplate
