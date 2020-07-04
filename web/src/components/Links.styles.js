import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const defaultLinkStyle = css`
  color: #000;
  text-decoration: none;
  display: block;
`

export const External = styled.a`
  ${defaultLinkStyle}
`

export const Internal = styled(Link)`
  ${defaultLinkStyle}
`
