import React from "react"

import { useSiteContext } from "../../siteContext"
import ProjectPreview from "../project/Preview"
import Navigation from "../navigation"
import Header from "../header"

import { ProjectsWrapper } from "./styles"
import { LayoutWrapper } from "../layout/styles"

const Work = () => {
  const { data } = useSiteContext()
  return (
    <LayoutWrapper>
      <Header />
      <Navigation />
      {data?.projects?.all && (
        <ProjectsWrapper>
          {data.projects.all.map(project => (
            <ProjectPreview {...project} key={project.id} />
          ))}
        </ProjectsWrapper>
      )}
    </LayoutWrapper>
  )
}

export default Work
