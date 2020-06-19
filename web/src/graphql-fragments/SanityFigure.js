import { graphql } from "gatsby"

export const SanityFigure = graphql`
  fragment SanityFigure on SanityFigure {
    _key
    alt
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }
`
