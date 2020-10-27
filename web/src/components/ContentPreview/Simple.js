import React from "react"
import InternalLink from "../InternalLink"
import ExternalLink from "../ExternalLink"

import { Preview, SmallTitle } from "./ContentPreview.styles"

const Simple = ({ preview, title, _type, slug, link, displayType, last }) => {
  const previewTitle = (preview && preview.title) || title
  return (
    <Preview>
      <InternalLink type={_type} slug={slug}>
        <div className="overview">
          <SmallTitle>
            {previewTitle}
            {last ? "." : ", "}
          </SmallTitle>
        </div>
      </InternalLink>
    </Preview>
  )
}

export default Simple
