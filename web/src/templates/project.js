import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Project from "../components/project"
import Layout from "../components/layout"

export const query = graphql`
  query GetProject($id: String!) {
    project: sanityProject(_id: { eq: $id }) {
      id: _id
      title
      role
      link
      content: _rawMainMedia(resolveReferences: { maxDepth: 10 })
      links {
        _key
        name
        link
      }
      category {
        id
        title
      }
      collaborators {
        collaborator {
          _id
          name
          link
        }
        _key
        role
      }
    }
  }
`
const ProjectTemplate = ({ data, errors, pageContext }) => {
  const project = data && data.project

  if (!pageContext.id || !project) return null

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return (
    <Layout>
      <Project {...project} />
    </Layout>
  )
}

export default ProjectTemplate
