import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Project from "../components/project"
import SEO from "../components/seo"

export const query = graphql`
  query GetProject($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      _rawDescription(resolveReferences: { maxDepth: 10 })
      role
      link
      mainMedia {
        ... on SanityVideoEmbed {
          ...SanityVideoEmbed
        }
        ... on SanityFigure {
          ...SanityFigure
        }
      }
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
      openGraph {
        ...OpenGraph
      }
    }
  }
`
const ProjectTemplate = ({ data, errors }) => {
  const project = data && data.project
  const seoSettings = project.openGraph

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return (
    <>
      <SEO {...seoSettings} />
      <Project {...project} />
    </>
  )
}

export default ProjectTemplate
