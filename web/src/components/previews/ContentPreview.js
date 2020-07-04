import React from "react"

import ContentPreviewInprogress from "./ContentPreviewInprogress"
import ContentPreviewLink from "./ContentPreviewLink"
import ContentPreviewDetailed from "./ContentPreviewDetailed"
import ContentPreviewSimple from "./ContentPreviewSimple"

const ContentPreview = props => {
  const { displayType } = props
  switch (displayType) {
    case "deactivated":
      return <ContentPreviewInprogress {...props} />
    case "link":
      return <ContentPreviewLink {...props} />
    case "simple":
      return <ContentPreviewSimple {...props} />
    default:
      return <ContentPreviewDetailed {...props} />
  }
}

export default ContentPreview
