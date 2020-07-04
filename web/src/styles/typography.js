import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { fonts } from "./vars"
import { mq } from "./utils"

export const headline = css`
  font-family: ${fonts.bold};
`

export const headline_1 = css`
  ${headline}
  font-size: 2rem;
`

export const H1 = styled.h1`
  ${headline_1}
`

export const H2 = styled.h2`
  ${headline}
  font-size: 1.8rem;
  ${mq.bigscreen} {
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
  ${mq.bigscreen} {
    font-size: 1.3rem;
  }
`
