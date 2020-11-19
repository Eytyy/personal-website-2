import styled from "@emotion/styled"
import { headline } from "../../styles/typography"
import { mq } from "../../styles/utils"

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

    ${mq.tablet} {
      font-size: 10em;
    }

    ${mq.desktop} {
      font-size: 10em;
    }

    ${mq.bigscreen} {
      font-size: 16em;
    }
  }
`
