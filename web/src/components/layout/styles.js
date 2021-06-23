import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const LayoutWrapper = styled.div`
  padding: 52px 52px 0px;
  height: calc(var(--app-height) - 52px);
  overflow-y: scroll;
  ${at(breakpoints.tablet)} {
    height: calc(var(--app-height) - 85px);
    padding: 85px 85px 0px;
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
