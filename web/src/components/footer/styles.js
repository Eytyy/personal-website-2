import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 52px;
  padding: 10px;
  z-index: 100;
  align-items: center;
  gap: 10px;

  ${at(breakpoints.tablet)} {
    padding: 20px;
    height: 85px;
    gap: 20px;
  }
`
