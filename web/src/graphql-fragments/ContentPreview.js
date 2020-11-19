import { graphql } from "gatsby"

export const ContentPreview = graphql`
  fragment ContentPreview on SanityProject {
    title
    displayType
    category {
      _key
      title
    }
    _type
    slug {
      current
    }
    preview {
      title
      figure {
        ...SanityFigure
      }
      video {
        ...SanityVideo
      }
    }
  }
`
