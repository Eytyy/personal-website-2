import React from "react"
import { css } from "@emotion/core"
import { headline } from "../styles/typography"
import { mq } from "../styles/utils"

const Contact = ({ children }) => {
  return (
    <section
      css={css`
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
      `}
    >
      {children}
    </section>
  )
}

export default Contact
