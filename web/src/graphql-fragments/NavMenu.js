import { graphql } from "gatsby"

export const NavMenu = graphql`
  fragment NavMenu on SanityNavigationMenu {
    items {
      _key
      title
      kind
      link
      route
      landingPageRoute {
        ... on SanityRoute {
          id
          _type
          slug {
            current
          }
        }
      }
    }
  }
`
