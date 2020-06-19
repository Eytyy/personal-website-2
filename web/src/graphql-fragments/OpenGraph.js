import { graphql } from "gatsby"

export const OpenGraph = graphql`
  fragment OpenGraph on SanityOpenGraph {
    title
    description
    image {
      ...SanityFigure
    }
  }
`
