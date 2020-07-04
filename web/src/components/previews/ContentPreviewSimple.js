import React, { useState } from "react"
import Figure from "../media/figure"
import Video from "../media/video"
import ExternalLink from "../ExternalLink"
import { SmallTitle, SimplePreview, QuickView } from "./ContentPreview.styles"

const ContentPreviewSimple = ({
  preview,
  title,
  displayType,
  role,
  link,
  collaborators,
  ...props
}) => {
  const [active, setActive] = useState(false)

  const previewTitle = (preview && preview.title) || title
  const hasMedia = preview && (preview.figure || preview.video)
  return (
    <SimplePreview
      hasMedia={hasMedia}
      active={active}
      onClick={() => setActive(!active)}
    >
      <div className="media">
        {preview ? (
          preview.figure ? (
            <Figure format="square" image={preview.figure} width="300" />
          ) : preview.video && preview.video.file ? (
            <Video hideControls={true} autoplay={true} {...preview} />
          ) : null
        ) : null}
      </div>
      <div>
        <SmallTitle>{previewTitle}</SmallTitle>
        <QuickView>
          <div className="role">{role}</div>
          {link && (
            <ExternalLink className="link" to={link}>
              <strong>vist website</strong>
            </ExternalLink>
          )}
        </QuickView>
      </div>
    </SimplePreview>
  )
}

export default ContentPreviewSimple
