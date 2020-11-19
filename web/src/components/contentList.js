import React from "react"
import ContentPreview from "./ContentPreview/ContentPreview"
import Simple from "./ContentPreview/Simple"

import { Grid, List } from "../styles/layout"
import ContactSimple from "./Contact/ContactSimple"

const ContentList = ({ content, displayType }) => {
  return displayType === "list" ? (
    <List>
      {content.map((block, i) => (
        <Simple last={i === content.length - 1} {...block} key={block._id} />
      ))}
      <ContactSimple />
    </List>
  ) : (
    <Grid>
      {content.map(block => (
        <ContentPreview {...block} key={block._id} />
      ))}
    </Grid>
  )
}

export default ContentList
