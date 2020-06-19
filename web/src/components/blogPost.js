import React from "react"
import { H1 } from "../styles/typography"
import { PageHeader } from "../styles/layout"

const BlogPost = props => {
  const { title, _rawBody } = props
  return (
    <article>
      <PageHeader>
        <H1>{title}</H1>
      </PageHeader>
    </article>
  )
}

export default BlogPost
