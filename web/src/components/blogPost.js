import React from "react"
import { PageHeader } from "../styles/layout"

const BlogPost = props => {
  const { title } = props
  return (
    <article>
      <PageHeader>
        <h1>{title}</h1>
      </PageHeader>
    </article>
  )
}

export default BlogPost
