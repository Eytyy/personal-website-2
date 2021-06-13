import styled from "@emotion/styled"

export const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 42px;
  left: 0;
  padding: 20px;
  z-index: 2;
`

export const NavigationItem = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  margin: 20px 0;
  font-size: 32px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
`
