import styled from "@emotion/styled"
import { headline } from "../../styles/typography"
import { at, breakpoints } from "../../styles/utils"

export const ContactLink = styled.a`
  color: blue;
  text-decoration: none;
`

export const ContactWrapper = styled.section`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    ${headline}
    font-size: 6em;
    word-break: break-word;
    color: blue;
    :hover {
      color: black;
    }

    ${at(breakpoints.tablet)} {
      font-size: 10em;
    }

    ${at(breakpoints.desktop)} {
      font-size: 10em;
    }

    ${at(breakpoints.bigscreen)} {
      font-size: 16em;
    }
  }
`
