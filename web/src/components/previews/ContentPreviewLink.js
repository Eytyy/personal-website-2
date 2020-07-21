import React from "react"
import Figure from "../media/figure"
import Video from "../media/video"
import {
  ExternalLinkLabel,
  SmallTitle,
  PreviewLink,
} from "./ContentPreview.styles"
import ExternalLink from "../ExternalLink"

const ContentPreviewLink = ({ preview, title, displayType, link, role }) => {
  const previewTitle = (preview && preview.title) || title

  return (
    <PreviewLink>
      <ExternalLink to={link}>
        <div className="media">
          {preview ? (
            preview.figure ? (
              <Figure format="square" image={preview.figure} width="300" />
            ) : preview.video && preview.video.file ? (
              <Video hideControls={true} autoplay={true} {...preview} />
            ) : null
          ) : null}
        </div>
        <SmallTitle displayType={displayType}>{previewTitle}</SmallTitle>
        {role}
        <ExternalLinkLabel>visit website</ExternalLinkLabel>
      </ExternalLink>
    </PreviewLink>
  )
}

export default ContentPreviewLink
