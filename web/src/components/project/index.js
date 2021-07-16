import React, { useEffect, useRef } from "react"
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
  const { media, title, id } = props
  const { state, setActiveProject } = useSiteContext()
  const { activeAssetID } = state
  const loaded = useRef(false)

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true
      setActiveProject({
        projectID: id,
      })
    }
  }, [id, setActiveProject])

  const asset = media?.find(({ _key }) => _key === activeAssetID) || media?.[0]
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
            {`${state?.activeAssetIndex + 1}/${media?.length || 1}: ${
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
