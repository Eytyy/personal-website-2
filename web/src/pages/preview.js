import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import clientConfig from "../../client-config"
import ProjectTemplate from "../templates/project"

const sanityClient = require("@sanity/client")

const Default = props => {
  return <div>Sanity Content Preview</div>
}

const projectQuery = `
 	'id': _id,
  category->{
  	_id,
  	title
	},
	'content': mainMedia[] {
    video {
  		file {
    		asset->
  		}	  
	  },
    ...
  },
	role,
	link,
	links[]{
    _key,
    link,
    name
  },
	collaborators[]{
    _key,
    role,
    collaborator->{_id, name, link}
  }
`

const ProjectPreview = ({ client, slug, pageContext }) => {
  const [data, setData] = useState({
    id: null,
    project: null,
  })

  const queryPreviewProject = `*[slug.current == "${slug}"] {
    ${projectQuery}
  }`

  useEffect(() => {
    client.fetch(queryPreviewProject).then(res => {
      const data = res?.[0]
      if (data) {
        setData({
          id: data.id,
          project: { ...data },
        })
      }
    })
  }, [])

  return data.id ? (
    <ProjectTemplate
      data={data}
      pageContext={{ ...pageContext, id: data.id }}
    />
  ) : null
}

const PagePreview = ({ document, slug, pageContext }) => {
  const client = sanityClient({
    projectId: clientConfig.sanity.projectId,
    dataset: clientConfig.sanity.dataset,
    withCredentials: true,
    useCdn: false,
  })

  switch (document) {
    case "work":
      return (
        <ProjectPreview client={client} slug={slug} pageContext={pageContext} />
      )
    default:
      return null
  }
}

const Preview = props => {
  return (
    <div>
      <Router basepath="/preview">
        <Default path="/" />
        <PagePreview path="/:document/:slug" />
      </Router>
    </div>
  )
}

export default Preview
