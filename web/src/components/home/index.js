import React from "react"

import { useSiteContext } from "../../siteContext"
import ContactSimple from "../Contact/ContactSimple"
import ProjectDetails from "../project/Details"
import Project from "../project"
import { ProjectsWrapper } from "./styles"
import Navigation from "../navigation"
import Header from "../header"
import { LayoutWrapper } from "../layout/styles"

const Home = ({ data }) => {
  const { state, setActive } = useSiteContext()

  const activeProject = state.activeProject

  return (
    <LayoutWrapper>
      <Header />
      <Navigation />
      <ProjectsWrapper>
        {data.map(project => (
          <Project setActive={setActive} {...project} key={project._id} />
        ))}
      </ProjectsWrapper>
      {activeProject && (
        <ProjectDetails
          {...activeProject}
          assetId={state.activeAssetID}
          isDescriptionVisible={state.isDescriptionVisible}
        />
      )}
      <ContactSimple />
    </LayoutWrapper>
  )
}

export default Home
