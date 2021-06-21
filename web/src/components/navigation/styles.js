import styled from "@emotion/styled"

export const MainNavigation = styled.nav`
  display: grid;
  grid-gap: 20px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0;
  padding: 20px;
  z-index: 200;
  align-items: flex-start;
`

export const NavigationItem = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  font-size: 42px;
  display: flex;
  color: blue;
  justify-content: center;
  align-items: center;
  svg,
  path {
    stroke: currentColor;
  }
`
