import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const LayoutWrapper = styled.div`
  height: var(--app-height);
  overflow-y: scroll;
  ${at(breakpoints.tablet)} {
    height: calc(var(--app-height) - 85px);
    padding: 85px 85px 0px;
  }
`

export const PresentationLayoutWrapper = styled.div`
  height: var(--app-height);
  overflow-y: scroll;
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
