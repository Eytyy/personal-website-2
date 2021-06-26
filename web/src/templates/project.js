import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Project from "../components/project"

export const query = graphql`
  query GetProject($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      description: _rawDescription(resolveReferences: { maxDepth: 10 })
      role
      link
      media: _rawMainMedia(resolveReferences: { maxDepth: 10 })
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
const ProjectTemplate = ({ data, errors }) => {
  const project = data && data.project

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return <Project {...project} />
}

export default ProjectTemplate
