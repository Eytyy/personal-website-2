import { graphql } from "gatsby"

export const SanityVideoEmbed = graphql`
  fragment SanityVideoEmbed on SanityVideoEmbed {
    _key
    title
    posterFrame {
      ...SanityFigure
    }
    muted
    loop
    preload
    autoplay
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
