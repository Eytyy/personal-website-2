import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { fonts } from "./vars"

const headline = css`
  font-family: ${fonts.bold};
`

export const H1 = styled.h1`
  ${headline}
  font-size: 3rem;
`

export const H2 = styled.h1`
  ${headline}
  font-size: 2.6rem;
`

export const H3 = styled.h1`
  ${headline}
  font-size: 2.2rem;
`

export const H4 = styled.h1`
  ${headline}
  font-size: 1.8rem;
`
