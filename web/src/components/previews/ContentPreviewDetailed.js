import React from "react"
import InternalLink from "../InternalLink"
import Figure from "../media/figure"
import Video from "../media/video"

import {
  SmallTitle,
  DetailedPreview,
  QuickView,
  BigTitle,
} from "./ContentPreview.styles"
import ExternalLink from "../ExternalLink"

const ContentPreviewDetailed = ({
  preview,
  title,
  displayType,
  role,
  collaborators,
  link,
  ...props
}) => {
  const previewTitle = (preview && preview.title) || title
  return (
    <DetailedPreview>
      <InternalLink {...props}>
        {preview ? (
          <div className="media">
            {preview.figure ? (
              <Figure format="square" image={preview.figure} width="300" />
            ) : preview.video && preview.video.file ? (
              <Video hideControls={true} autoplay={true} {...preview} />
            ) : null}
          </div>
        ) : null}

        <div className="overview">
          <SmallTitle big displayType={displayType}>
            {previewTitle}
          </SmallTitle>
          <QuickView>
            <div className="role">{role}</div>
          </QuickView>
        </div>
      </InternalLink>
    </DetailedPreview>
  )
}

export default ContentPreviewDetailed
