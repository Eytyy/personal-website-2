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
  return location && location.pathname !== "/" ? (
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
          <NavigationItem>
            <Link to="/">&larr;</Link>
          </NavigationItem>
        </MainNavigation>
      </HeaderInner>
    </HeaderWrapper>
  ) : null
}

export default Header
