import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { spacing, wrapFull } from "../styles/utils"
import { headline } from "../styles/typography"

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${spacing.small} 0px;
  z-index: 100;
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`

export const HeaderInner = styled.div`
  ${wrapFull}
`

export const MainNavigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const NavigationItem = styled.div`
  a {
    ${headline}
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: blue;
    color: #fff;
    box-shadow: 0px 2px 13px -10px #000;
    transition: 0.3s;
    :hover {
      transform: scale(1.2);
    }
  }
`

export const hidden = css`
  display: none;
`
