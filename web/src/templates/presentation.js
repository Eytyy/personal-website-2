import React from "react"
import { graphql } from "gatsby"
import Presentation from "../components/presentation"
import PresentationLayout from "../components/layout/PresentationLayout"

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
  return (
    <PresentationLayout>
      <Presentation {...presentation} />
    </PresentationLayout>
  )
}

export default PresentationTemplate
