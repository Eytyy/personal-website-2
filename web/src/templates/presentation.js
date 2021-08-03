import React from "react"
import { graphql } from "gatsby"
import Presentation from "../components/presentation"
import PresentationLayout from "../components/layout/PresentationLayout"

export const query = graphql`
  query GetPresentation($id: String!) {
    presentation: sanityPresentation(_id: { eq: $id }) {
      id: _id
      title
      scope
      date
      content: _rawContent(resolveReferences: { maxDepth: 15 })
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
