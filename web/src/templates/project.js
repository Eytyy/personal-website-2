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
          _key
          title
          posterFrame {
            _key
            alt
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              metadata {
                lqip
                dimensions {
                  aspectRatio
                  width
                  height
                }
              }
            }
          }
          video {
            file {
              asset {
                url
              }
            }
          }
        }
        ... on SanityFigure {
          _key
          alt
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
            metadata {
              lqip
              dimensions {
                aspectRatio
                width
                height
              }
            }
          }
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
      <Project {...project} />
    </>
  )
}

export default ProjectTemplate
