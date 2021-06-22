import React, { createContext, useContext, useEffect, useState } from "react"

const SiteContext = createContext()

const initialState = {
  activeProject: null,
  activeAssetID: null,
  activeProjectIndex: null,
  activeAssetIndex: null,
  hasDescription: false,
  isDescriptionVisible: false,
}

export const SiteContextProvider = ({ children, data }) => {
  const [state, setState] = useState(initialState)

  function setActive(project, asset_id, asset_index, project_index) {
    const activeProjectIndex =
      project_index ||
      data?.projects?.all.findIndex(({ _id }) => project?._id === _id)

    setState(state => ({
      ...state,
      hasDescription: typeof project.description !== "undefined",
      activeProject: { ...project },
      activeProjectIndex,
      activeAssetID: asset_id,
      activeAssetIndex: asset_index,
    }))
  }

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

  function showNextProject() {
    const { activeProjectIndex } = state
    if (activeProjectIndex === null || !data?.projects?.all) return false
    const projects = data?.projects?.all
    const isLastProjectInArray =
      state.activeProjectIndex === projects.length - 1
    const newActiveProjectIndex = isLastProjectInArray
      ? 0
      : activeProjectIndex + 1
    const newActiveProject = projects[newActiveProjectIndex]
    const asset_index = 0
    const asset_id = newActiveProject.media[0]._key

    setActive(newActiveProject, asset_id, asset_index, newActiveProjectIndex)
  }

  function showNextSlide() {
    const newSlideIndex = state.activeAssetIndex + 1
    setState(state => ({
      ...state,
      activeAssetIndex: newSlideIndex,
      activeAssetID: state.activeProject.media[newSlideIndex]._key,
    }))
  }

  function showPreviousProject() {
    const { activeProjectIndex } = state
    const projects = data?.projects?.all
    if (activeProjectIndex === null || !projects) return false

    const isFirstProjectInArray = state.activeProjectIndex === 0
    const newActiveProjectIndex = isFirstProjectInArray
      ? projects.length - 1
      : activeProjectIndex - 1
    const newActiveProject = projects[newActiveProjectIndex]
    const asset_id = newActiveProject.media[0]._key
    const asset_index = 0

    setActive(newActiveProject, asset_id, asset_index, newActiveProjectIndex)
  }

  function showPreviousSlide() {
    const newSlideIndex = state.activeAssetIndex - 1

    setState(state => ({
      ...state,
      activeAssetIndex: newSlideIndex,
      activeAssetID: state.activeProject.media[newSlideIndex]._key,
    }))
  }

  function updateVisibleContent(direction) {
    const { activeAssetIndex, activeProject, isDescriptionVisible } = state
    if (activeAssetIndex === null || !activeProject) return false

    const { media } = activeProject
    if (direction === "next") {
      // if last slide, load next project, otherwise show next slide
      if (activeAssetIndex === media?.length - 1 || isDescriptionVisible) {
        showNextProject()
      } else {
        showNextSlide()
      }
    }

    if (direction === "prev") {
      // if first slide, load previous project, otherwise show previous slide
      if (activeAssetIndex == 0 || isDescriptionVisible) {
        showPreviousProject()
      } else {
        showPreviousSlide()
      }
    }
  }

  function showNext() {
    updateVisibleContent("next")
  }

  function showPrevious() {
    updateVisibleContent("prev")
  }

  function setDescription() {}

  useEffect(() => {}, [state])

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
