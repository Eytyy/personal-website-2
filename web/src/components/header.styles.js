import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0px;
`

export const HeaderWebsiteLogo = styled.div`
  width: 40px;
`

export const MainNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const NavigationItem = styled.div`
  margin-left: 30px;
`

export const hidden = css`
  display: none;
`
