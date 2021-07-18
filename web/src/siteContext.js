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

export const SiteContextProvider = ({ children, ...props }) => {
  // fetch project
  const data = useStaticQuery(query)

  // initailzse state with fetched data
  const [state, setState] = useState(() => ({
    ...initialState,
    projects: [...data.projects.all],
  }))

  const closeProject = useCallback(() => {
    navigate("/")
    setState(state => ({
      ...state,
      ...initialState,
    }))
  }, [])

  // set active project and active asset
  const setActive = useCallback(
    ({ projectID, assetID, assetIndex = 0 }) => {
      const projects = data?.projects?.all
      if (!projects) return false

      const activeProjectIndex = projects.findIndex(
        ({ id }) => projectID === id
      )

      setState(state => ({
        ...state,
        activeProject: { ...projects[activeProjectIndex] },
        activeProjectIndex,
        activeAssetID: assetID,
        activeAssetIndex: assetIndex,
      }))
    },
    [data]
  )

  const setActiveProject = useCallback(
    ({ projectID, projectIndex }) => {
      const projects = data?.projects?.all
      if (!projects) return false

      const activeProjectIndex =
        projectIndex || projects.findIndex(({ id }) => projectID === id)

      const activeProject = { ...projects[activeProjectIndex] }

      // First slide
      const activeAssetIndex = 0
      const activeAssetID = activeProject.media[activeAssetIndex]._key

      setState(state => ({
        ...state,
        activeProjectIndex,
        activeProject,
        activeAssetID,
        activeAssetIndex,
      }))
    },
    [data]
  )

  const showNext = useCallback(
    function showNextCallback() {
      const projects = data?.projects?.all
      if (!projects) return false

      const { activeAssetIndex, activeProject, activeProjectIndex } = state

      function showNextProject() {
        const lastProjectIndex = projects.length - 1
        const isLastProjectInArray = activeProjectIndex === lastProjectIndex
        const newActiveProjectIndex = isLastProjectInArray
          ? 0
          : activeProjectIndex + 1

        const newActiveProject = projects[newActiveProjectIndex]

        setActiveProject({
          projectIndex: newActiveProjectIndex,
          projectID: newActiveProject.id,
        })

        navigate(`/work/${newActiveProject.slug.current}`)
      }

      function showNextSlide() {
        const { media } = activeProject
        const newSlideIndex = activeAssetIndex + 1

        setState(state => ({
          ...state,
          activeAssetIndex: newSlideIndex,
          activeAssetID: media[newSlideIndex]._key,
        }))
      }

      // if last slide, load next project, otherwise show next slide
      if (activeAssetIndex === activeProject.media?.length - 1) {
        showNextProject()
      } else {
        showNextSlide()
      }
    },
    [setActiveProject, data, state]
  )

  const showPrevious = useCallback(
    function showPreviousCallback() {
      const projects = data?.projects?.all
      if (!projects) return false

      const { activeAssetIndex, activeProjectIndex, activeProject } = state

      function showPreviousProject() {
        const isFirstProjectInArray = activeProjectIndex === 0
        const newActiveProjectIndex = isFirstProjectInArray
          ? projects.length - 1
          : activeProjectIndex - 1

        const newActiveProject = projects[newActiveProjectIndex]

        setActiveProject({
          projectIndex: newActiveProjectIndex,
          projectID: newActiveProject.id,
        })

        navigate(`/work/${newActiveProject.slug.current}`)
      }

      function showPreviousSlide() {
        const { media } = activeProject
        const newSlideIndex = activeAssetIndex - 1

        setState(state => ({
          ...state,
          activeAssetIndex: newSlideIndex,
          activeAssetID: media[newSlideIndex]._key,
        }))
      }

      // if first slide, load previous project, otherwise show previous slide
      if (activeAssetIndex === 0) {
        showPreviousProject()
      } else {
        showPreviousSlide()
      }
    },
    [setActiveProject, data, state]
  )

  return (
    <SiteContext.Provider
      value={{
        state,
        data,
        setActive,
        setActiveProject,
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
