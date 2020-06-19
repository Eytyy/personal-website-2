import React from "react"
import { graphql, Link } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import { Grid } from "../styles/layout"
import { H2 } from "../styles/typography"

export const query = graphql`
  query projectsQuery {
    projects: allSanityProject {
      nodes {
        _id
        title
        _rawBody
        slug {
          current
        }
        openGraph {
          ...OpenGraph
        }
      }
    }
  }
`

const Work = props => {
  const { data, errors } = props
  const projects = data.projects.nodes
  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <Grid>
        {projects.map(project => (
          <div key={project._id}>
            <Link to={project.slug.current}>
              <H2>{project.title}</H2>
            </Link>
          </div>
        ))}
      </Grid>
      <SEO />
    </>
  )
}

export default Work
