import React from "react"
import { MdClose, MdImage, MdTextFields } from "react-icons/md"
import { useSiteContext } from "../../siteContext"
import { MainNavigation, NavigationItem } from "./styles"

const Navigation = () => {
  const {
    state,
    closeProject,
    hideDescription,
    showDescription,
  } = useSiteContext()

  return (
    <MainNavigation>
      {state?.activeProject && (
        <NavigationItem onClick={closeProject}>
          <MdClose />
        </NavigationItem>
      )}
      {/* {state?.hasDescription && !state?.isDescriptionVisible && (
        <NavigationItem onClick={showDescription}>
          <MdTextFields />
        </NavigationItem>
      )}
      {state?.hasDescription && state?.isDescriptionVisible && (
        <NavigationItem onClick={hideDescription}>
          <MdImage />
        </NavigationItem>
      )} */}
    </MainNavigation>
  )
}

export default Navigation
