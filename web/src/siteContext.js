import React, { createContext, useContext, useEffect, useState } from "react"

const SiteContext = createContext()

const initialState = {
  activeProject: null,
  activeAssetID: null,
  activeProjectIndex: null,
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

  function showNext() {
    console.log("current", state.activeProjectIndex, state.activeAssetID)
    console.log("next")
  }

  function showPrevious() {
    console.log("current", state.activeProjectIndex, state.activeAssetID)
    console.log("previous")
  }

  function setDescription() {}

  useEffect(() => {}, [state])

  function setActive(project, asset_id) {
    const activeProjectIndex = data?.projects?.all.findIndex(
      ({ _id }) => project?._id === _id
    )
    setState(state => ({
      ...state,
      hasDescription: typeof project.description !== "undefined",
      activeProject: { ...project },
      activeProjectIndex,
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
        showNext,
        showPrevious,
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
