import React, { useCallback, useEffect, useRef } from "react"
import { useSiteContext } from "../../siteContext"
import Media from "../media/media"
import PortableText from "../PortableText"
import {
  ProjecDescriptionWrapper,
  ProjecDescriptionInner,
  ProjecMediaWrapper,
  ProjectDetailsWrapper,
  Caption,
  MainTitle,
} from "./styles"

const Project = props => {
  const { content, title, id } = props
  const {
    state,
    setActiveProject,
    showNext,
    showPrevious,
    closeProject,
  } = useSiteContext()
  const { activeAssetID } = state
  const loaded = useRef(false)

  useEffect(() => {
    console.log(id)
    if (!loaded.current) {
      loaded.current = true
      setActiveProject({
        projectID: id,
      })
    }
  }, [id, setActiveProject])

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

  const asset =
    content?.find(({ _key }) => _key === activeAssetID) || content?.[0]
  if (!asset) return null

  return (
    <ProjectDetailsWrapper type={asset._type}>
      <MainTitle>{title}</MainTitle>
      {asset?._type === "contentBlockSimple" ? (
        <ProjecDescriptionWrapper>
          <ProjecDescriptionInner>
            <PortableText blocks={asset.content} />
          </ProjecDescriptionInner>
        </ProjecDescriptionWrapper>
      ) : (
        <ProjecMediaWrapper>
          <Media {...asset} />
          <Caption type={asset?._type}>
            {`${state?.activeAssetIndex + 1}/${content?.length || 1}: ${
              asset?._type === "figure"
                ? asset.caption || "untitled"
                : asset.posterFrame.caption || "untitled"
            }`}
          </Caption>
        </ProjecMediaWrapper>
      )}
    </ProjectDetailsWrapper>
  )
}

export default Project
