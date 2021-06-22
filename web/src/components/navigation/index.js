import React from "react"
import { MdImage } from "react-icons/md"

import { GrClose, GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { useSiteContext } from "../../siteContext"
import { MainNavigation, NavigationItem } from "./styles"

const Navigation = () => {
  const {
    state,
    closeProject,
    hideDescription,
    showDescription,
    showNext,
    showPrevious,
  } = useSiteContext()

  return (
    <>
      <MainNavigation>
        {state?.activeProject && (
          <NavigationItem onClick={closeProject}>
            <GrClose />
          </NavigationItem>
        )}
        {state?.hasDescription && !state?.isDescriptionVisible && (
          <NavigationItem onClick={showDescription}>Tt</NavigationItem>
        )}
        {state?.hasDescription && state?.isDescriptionVisible && (
          <NavigationItem onClick={hideDescription}>
            <MdImage />
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
    </>
  )
}

export default Navigation
