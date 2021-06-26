import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const MainNavigation = styled.nav`
  display: grid;
  grid-gap: 20px;
  position: fixed;
  top: 0px;
  right: 0;
  padding: 10px;
  z-index: 200;
  align-items: flex-start;
  grid-auto-rows: 1fr;
  height: var(--app-height);
  ${at(breakpoints.tablet)} {
    padding: 20px;
  }
`

export const NavigationItem = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  font-size: 32px;
  display: flex;
  color: blue;
  justify-content: center;
  align-items: center;
  svg,
  path {
    stroke: currentColor;
  }
  ${at(breakpoints.tablet)} {
    font-size: 42px;
  }
`
