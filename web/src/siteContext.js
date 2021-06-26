import { graphql, navigate, useStaticQuery } from "gatsby"
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

const query = graphql`
  query ProjectsQuery {
    projects: allSanityProject {
      all: nodes {
        title
        id
        slug {
          current
        }
        media: _rawMainMedia(resolveReferences: { maxDepth: 10 })
        description: _rawDescription(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`

export const SiteContextProvider = ({ children }) => {
  // fetch project
  const data = useStaticQuery(query)

  // initailzse state with fetched data
  const [state, setState] = useState(() => ({
    ...initialState,
    projects: [...data.projects.all],
  }))

  // set active project
  function setActive(project, asset_id, asset_index, project_index) {
    const activeProjectIndex =
      project_index ||
      data?.projects?.all?.findIndex(({ id }) => project?.id === id)

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
    navigate("/")
    setState(state => ({
      ...state,
      ...initialState,
    }))
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
    if (newActiveProject?.slug?.current) {
      navigate(`/work/${newActiveProject?.slug?.current}`)
    } else {
      closeProject()
    }
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
    if (newActiveProject?.slug?.current) {
      navigate(`/work/${newActiveProject?.slug?.current}`)
    } else {
      closeProject()
    }
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
        data,
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
