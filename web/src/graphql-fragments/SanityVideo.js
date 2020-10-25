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
      muted
      loop
      preload
      autoplay
      format
    }
  }
`

export const SanityVideo = graphql`
  fragment SanityVideo on SanityVideo {
    _key
    file {
      asset {
        url
      }
    }
    url
    muted
    loop
    preload
    autoplay
    format
  }
`
