import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import CTALink from "./CTALink"
import { MdSentimentSatisfied } from "react-icons/md"
import {
  HeaderWrapper,
  HeaderInner,
  MainNavigation,
  NavigationItem,
  hidden,
} from "./header.styles"
import { css } from "@emotion/core"

const query = graphql`
  query mainNavigation {
    site: sanitySiteSettings {
      mainNav: siteNavigation {
        ...NavMenu
      }
    }
  }
`

const Header = ({ siteTitle, location }) => {
  const data = useStaticQuery(query)
  const navMenuItems = data.site.mainNav.items
  return (
    <HeaderWrapper>
      <HeaderInner>
        <h1
          aria-hidden
          css={css`
            ${hidden}
          `}
        >
          {siteTitle}
        </h1>
        <MainNavigation>
          {location.pathname !== "/" && (
            <NavigationItem>
              <Link to="/">&larr;</Link>
            </NavigationItem>
          )}
          {navMenuItems &&
            navMenuItems.map(i => (
              <CTALink key={i._key} location={location} {...i} />
            ))}
        </MainNavigation>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
