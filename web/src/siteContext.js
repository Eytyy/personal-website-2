import React, { createContext, useContext, useState } from "react"

const SiteContext = createContext()

const initialState = {
  activeProjectID: null,
  activeAssetID: null,
  hasDescription: false,
  isDescriptionVisible: false,
}

export const SiteContextProvider = ({ children, data }) => {
  const [state, setState] = useState(initialState)

  function closeProject() {
    setState(initialState)
  }

  function showDescription() {
    setState(state => ({
      ...state,
      isDescriptionVisible: true,
    }))
  }

  function hideDescription() {
    setState(state => ({
      ...state,
      isDescriptionVisible: false,
    }))
  }

  function setDescription() {}

  function setActive(project, asset_id) {
    setState(state => ({
      ...state,
      hasDescription: typeof project.description !== "undefined",
      activeProject: { ...project },
      activeAssetID: asset_id,
    }))
  }

  return (
    <SiteContext.Provider
      value={{
        state,
        setActive,
        setDescription,
        closeProject,
        showDescription,
        hideDescription,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export const useSiteContext = () => {
  const context = useContext(SiteContext)
  return context
}
