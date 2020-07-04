import React from "react"
import Figure from "../media/figure"
import Video from "../media/video"

import {
  SmallTitle,
  DecativatedLabel,
  InProgressPreview,
} from "./ContentPreview.styles"

const ContentPreviewInprogress = ({
  preview,
  title,
  displayType,
  ...props
}) => {
  const previewTitle = (preview && preview.title) || title
  const hasMedia = preview && (preview.figure || preview.video)

  return (
    <InProgressPreview hasMedia={hasMedia}>
      {hasMedia && (
        <div className="media">
          {preview.figure ? (
            <Figure format="square" image={preview.figure} width="300" />
          ) : preview.video && preview.video.file ? (
            <Video hideControls={true} autoplay={true} {...preview} />
          ) : null}
        </div>
      )}
      <SmallTitle>{previewTitle}</SmallTitle>
      <DecativatedLabel>in-progress</DecativatedLabel>
    </InProgressPreview>
  )
}

export default ContentPreviewInprogress
