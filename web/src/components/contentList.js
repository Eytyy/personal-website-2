import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { H2 } from "../styles/typography"

const getInternalLinkPath = ({ _type, slug }) => {
  let basePath
  switch (_type) {
    case "project":
      basePath = "/work/"
      break
    case "post":
      basePath = "/blog/"
      break
    default:
      basePath = "/"
      break
  }
  return `${basePath}${slug}`
}

const ContentList = ({ content }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 60px;
      `}
    >
      {content.map(block => (
        <div key={block._id}>
          <Link
            to={getInternalLinkPath({
              _type: block._type,
              slug: block.slug.current,
            })}
          >
            <H2>{block.title}</H2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ContentList
