import React from "react"
import Media from "./media"
import { H1 } from "../styles/typography"
import { PageHeader } from "../styles/layout"

const Project = props => {
  const { title, mainMedia, _rawBody } = props
  return (
    <article>
      <PageHeader>
        <H1>{title}</H1>
      </PageHeader>
      <Media data={mainMedia} />
    </article>
  )
}

export default Project
