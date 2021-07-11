import React, { useEffect } from "react"
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
  const { media, title } = props
  const { state, setActive } = useSiteContext()

  const asset =
    media?.find(({ _key }) => _key === state?.activeAssetID) || media?.[0]

  const { activeAssetID, activeProject } = state
  useEffect(() => {
    if (!activeAssetID && activeProject) {
      setActive({ ...props }, media[0]._id, 0)
    }
  }, [activeProject, activeAssetID, , props, media, setActive])

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
            {`${state?.activeAssetIndex + 1}/${media?.length - 1 || 1}: ${
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
