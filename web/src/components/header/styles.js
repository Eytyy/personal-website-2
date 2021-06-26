import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { at, breakpoints } from "../../styles/utils"

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  padding: 10px;
  z-index: 100;
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  gap: 10px;

  ${at(breakpoints.tablet)} {
    padding: 20px;
    height: 85px;
    gap: 20px;
  }
`

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 3px solid ${props => (props?.color === "invert" ? "white" : "blue")};
  ${at(breakpoints.tablet)} {
    width: 42px;
    height: 42px;
  }
`
export const hidden = css`
  display: none;
`
