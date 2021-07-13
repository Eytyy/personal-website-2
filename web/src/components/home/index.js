import React from "react"
import { useSiteContext } from "../../siteContext"

import ProjectPreview from "../project/Preview"

import { ProjectsWrapper } from "./styles"

const Home = () => {
  const { data } = useSiteContext()

  return (
    data?.projects?.all && (
      <ProjectsWrapper>
        {data.projects.all.map(project => (
          <ProjectPreview {...project} key={project.id} />
        ))}
      </ProjectsWrapper>
    )
  )
}

export default Home
