import React from "react"
import ContentPreview from "./ContentPreview/ContentPreview"
import { Grid } from "../styles/layout"

const ContentList = ({ content }) => {
  return (
    <Grid>
      {content.map(block => (
        <ContentPreview {...block} key={block._id} />
      ))}
    </Grid>
  )
}

export default ContentList
