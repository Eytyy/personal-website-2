import React from "react"

import { GrClose, GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { useSiteContext } from "../../siteContext"
import { MainNavigation, NavigationItem } from "./styles"

const Navigation = () => {
  const { state, closeProject, showNext, showPrevious } = useSiteContext()
  console.log(state)
  return (
    <MainNavigation>
      {state?.activeProject && (
        <NavigationItem onClick={closeProject}>
          <GrClose />
        </NavigationItem>
      )}
      {state?.activeProject && (
        <NavigationItem onClick={showNext}>
          <GrLinkNext />
        </NavigationItem>
      )}
      {state?.activeProject && (
        <NavigationItem onClick={showPrevious}>
          <GrLinkPrevious />
        </NavigationItem>
      )}
    </MainNavigation>
  )
}

export default Navigation
