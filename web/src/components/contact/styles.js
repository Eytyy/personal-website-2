import styled from "@emotion/styled"
import { headline } from "../../styles/typography"
import { at, breakpoints } from "../../styles/utils"

export const ContactLink = styled.a`
  color: blue;
  text-decoration: none;
`

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  a {
    font-size: 32px;

    ${at(breakpoints.tablet)} {
      font-size: 42px;
    }
  }
`
