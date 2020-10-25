import React from "react"
import InternalLink from "../InternalLink"
import Figure from "../media/figure"
import Video from "../media/video"

import { SmallTitle, Preview } from "./ContentPreview.styles"

const ContentPreview = ({ preview, title, category, _type, slug }) => {
  const previewTitle = (preview && preview.title) || title
  return (
    <Preview>
      <InternalLink type={_type} slug={slug}>
        {preview && (preview.figure || preview.video) ? (
          <div className="media">
            {preview.figure ? (
              <Figure format="square" image={preview.figure} width="300" />
            ) : preview.video && preview.video.file ? (
              <Video hideControls={true} autoplay={true} {...preview} />
            ) : null}
          </div>
        ) : null}

        <div className="overview">
          <SmallTitle>{previewTitle}</SmallTitle>
          {category.title}
        </div>
      </InternalLink>
    </Preview>
  )
}

export default ContentPreview
