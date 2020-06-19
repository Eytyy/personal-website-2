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
      _rawBody(resolveReferences: { maxDepth: 10 })
      mainMedia {
        ... on SanityVideoEmbed {
          ...SanityVideoEmbed
        }
        ... on SanityFigure {
          ...SanityFigure
        }
      }
    }
  }
`
const ProjectTemplate = ({ data, errors }) => {
  const project = data && data.project
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  return (
    <>
      <SEO title={project.title || "Untitled"} description={"hof"} />
      <Project {...project} />
    </>
  )
}

export default ProjectTemplate
