import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { fonts } from "./vars"
import { at, breakpoints } from "./utils"

export const headline = css`
  font-family: ${fonts.bold};
`

export const H2 = styled.h2`
  ${headline}
  font-size: 1.8rem;
  ${at(breakpoints.bigscreen)} {
    font-size: 2.2rem;
  }
`

export const H3 = styled.h1`
  ${headline}
  font-size: 2.2rem;
`

export const H4 = styled.h1`
  ${headline}
  font-size: 1.8rem;
`

export const Body = styled.div`
  font-size: 1.1rem;
  line-height: 1.5em;
  ${at(breakpoints.bigscreen)} {
    font-size: 1.3rem;
  }
`
