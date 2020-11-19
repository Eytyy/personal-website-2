import React from "react"
import InternalLink from "../InternalLink"
import ExternalLink from "../ExternalLink"

import { Preview, SimpleTitle } from "./ContentPreview.styles"

const Simple = ({
  preview,
  title,
  _type,
  slug,
  last,
  displayType,
  link,
  role,
  category,
}) => {
  console.log(displayType)
  const previewTitle = (preview && preview.title) || title
  return (
    <Preview>
      {displayType === "link" && link ? (
        <ExternalLink to={link}>
          <div className="overview">
            <SimpleTitle>
              {previewTitle}
              {last ? "." : " / "}
            </SimpleTitle>
            {role}
          </div>
        </ExternalLink>
      ) : (
        <InternalLink type={_type} slug={slug}>
          <div className="overview">
            {category.title}
            <SimpleTitle>
              {previewTitle}
              {last ? "." : " / "}
            </SimpleTitle>
          </div>
        </InternalLink>
      )}
    </Preview>
  )
}

export default Simple
