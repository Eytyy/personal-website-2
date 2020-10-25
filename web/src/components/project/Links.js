import React from "react"
import ExternalLink from "../ExternalLink"
import { H2, Body } from "../../styles/typography"
import { css } from "@emotion/core"

const ProjectLinks = ({ content }) => {
  return (
    <div
      css={css`
        a {
          color: blue;
        }
        h2 {
          margin-bottom: 0.5em;
        }
      `}
    >
      <H2>Links</H2>
      <Body>
        {content.map(({ _key, link, name }) => (
          <ExternalLink to={link} key={_key}>
            {name}
          </ExternalLink>
        ))}
      </Body>
    </div>
  )
}

export default ProjectLinks
