import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  padding: 20px;
  z-index: 100;
  background: #fff;
`

export const Logo = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: 3px solid ${props => (props?.color === "invert" ? "white" : "blue")};
`
export const hidden = css`
  display: none;
`
