import { graphql, navigate, useStaticQuery } from "gatsby"
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const SiteContext = createContext()

const initialState = {
  activeProject: null,
  activeAssetID: null,
  activeProjectIndex: null,
  activeAssetIndex: null,
  subtitle: null,
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

  const closeProject = useCallback(() => {
    console.log("close")
    navigate("/")
    setState(state => ({
      ...state,
      ...initialState,
    }))
  }, [])

  // set active project and active asset
  const setActive = useCallback(
    (project, asset_id, asset_index, project_index) => {
      const activeProjectIndex =
        project_index ||
        data?.projects?.all?.findIndex(({ id }) => project?.id === id)

      setState(state => ({
        ...state,
        activeProject: { ...project },
        activeProjectIndex,
        activeAssetID: asset_id,
        activeAssetIndex: asset_index,
      }))
    },
    [data]
  )

  const updateActiveProject = useCallback(
    newActiveProjectIndex => {
      const projects = data?.projects?.all
      const newActiveProject = projects[newActiveProjectIndex]
      const asset_index = 0
      const asset_id = newActiveProject.media[0]._key

      setActive(newActiveProject, asset_id, asset_index, newActiveProjectIndex)
      if (newActiveProject?.slug?.current) {
        navigate(`/work/${newActiveProject?.slug?.current}`)
      } else {
        closeProject()
      }
    },
    [closeProject, setActive, data]
  )

  const showNext = useCallback(() => {
    const { activeAssetIndex, activeProject } = state
    if (activeAssetIndex === null || !activeProject) return false

    const { media } = activeProject

    function showNextProject() {
      const { activeProjectIndex } = state
      if (activeProjectIndex === null || !data?.projects?.all) return false

      const isLastProjectInArray =
        state.activeProjectIndex === data?.projects?.all.length - 1
      const newActiveProjectIndex = isLastProjectInArray
        ? 0
        : activeProjectIndex + 1

      updateActiveProject(newActiveProjectIndex)
    }

    function showNextSlide() {
      const newSlideIndex = state.activeAssetIndex + 1
      setState(state => ({
        ...state,
        activeAssetIndex: newSlideIndex,
        activeAssetID: state.activeProject.media[newSlideIndex]._key,
      }))
    }

    // if last slide, load next project, otherwise show next slide
    if (activeAssetIndex === media?.length - 1) {
      showNextProject()
    } else {
      showNextSlide()
    }
  }, [updateActiveProject, data, state])

  const showPrevious = useCallback(() => {
    const { activeAssetIndex, activeProject } = state
    if (activeAssetIndex === null || !activeProject) return false

    function showPreviousProject() {
      const { activeProjectIndex } = state
      const projects = data?.projects?.all
      if (activeProjectIndex === null || !projects) return false

      const isFirstProjectInArray = state.activeProjectIndex === 0
      const newActiveProjectIndex = isFirstProjectInArray
        ? projects.length - 1
        : activeProjectIndex - 1

      updateActiveProject(newActiveProjectIndex)
    }

    function showPreviousSlide() {
      const newSlideIndex = state.activeAssetIndex - 1

      setState(state => ({
        ...state,
        activeAssetIndex: newSlideIndex,
        activeAssetID: state.activeProject.media[newSlideIndex]._key,
      }))
    }

    // if first slide, load previous project, otherwise show previous slide
    if (activeAssetIndex === 0) {
      showPreviousProject()
    } else {
      showPreviousSlide()
    }
  }, [updateActiveProject, data, state])

  const onKeyDown = useCallback(
    ({ keyCode }) => {
      switch (keyCode) {
        case 39:
          showNext()
          break
        case 37:
          showPrevious()
          break
        case 27:
          closeProject()
          break
        default:
          return false
      }
    },
    [showNext, showPrevious, closeProject]
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [onKeyDown])

  return (
    <SiteContext.Provider
      value={{
        state,
        data,
        setActive,
        closeProject,
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
