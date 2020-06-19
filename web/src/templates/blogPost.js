import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"

export const query = graphql`
  query GetBlogPost($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const BlogPostTemplate = ({ data, errors }) => {
  const post = data && data.post
  if (errors) {
    return <GraphQLErrorList erros={errors} />
  }

  return (
    <>
      <SEO title={post.title || "Untitled"} description={"meao"} />
      <BlogPost {...post} />
    </>
  )
}

export default BlogPostTemplate
