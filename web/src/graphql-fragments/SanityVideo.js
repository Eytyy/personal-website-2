import { graphql } from "gatsby"

export const SanityVideoEmbed = graphql`
  fragment SanityVideoEmbed on SanityVideoEmbed {
    _key
    title
    posterFrame {
      ...SanityFigure
    }
    video {
      file {
        asset {
          url
        }
      }
      url
    }
  }
`
