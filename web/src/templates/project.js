import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Project from "../components/project/project"
import SEO from "../components/seo"

export const query = graphql`
  query GetProject($id: String!) {
    next: allSanityProject(
      filter: { id: { ne: $id }, displayType: { eq: "detailed" } }
      limit: 1
    ) {
      nodes {
        _type
        title
        preview {
          title
          video {
            file {
              asset {
                url
              }
            }
            loop
            muted
            preload
            format
            autoplay
          }
          figure {
            ...SanityFigure
          }
        }
        slug {
          current
        }
      }
    }
    project: sanityProject(id: { eq: $id }) {
      id
      title
      _rawDescription(resolveReferences: { maxDepth: 10 })
      _rawSections(resolveReferences: { maxDepth: 10 })
      role
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
      preview {
        title
        figure {
          ...SanityFigure
        }
        video {
          file {
            asset {
              url
            }
          }
        }
      }
      openGraph {
        ...OpenGraph
      }
    }
  }
`
const ProjectTemplate = ({ data, errors }) => {
  const project = data && data.project
  const next = data && data.next.nodes[0]
  const seoSettings = project.openGraph

  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return (
    <>
      <SEO {...seoSettings} />
      <Project next={next} {...project} />
    </>
  )
}

export default ProjectTemplate
