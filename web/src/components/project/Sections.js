import React, { Fragment } from "react"
import PortableText from "../PortableText"
import Media from "../media/media"
import {
  ProjectSectionGrid,
  ProjectSectionText,
  ProjectSectionMedia,
  ProjectSectionHeadline,
} from "./Sections.styles"

const ProjectSections = ({ sections }) => {
  const content = sections.map(component => {
    switch (component._type) {
      case "headline":
        return (
          <ProjectSectionHeadline
            highlighted={!!component.highlight}
            key={component._key}
          >
            {component.headline}
          </ProjectSectionHeadline>
        )
      case "contentBlock":
        return (
          <Fragment key={component._key}>
            {component.content && (
              <ProjectSectionText layout={component.contentLayout}>
                <PortableText blocks={component.content} />
              </ProjectSectionText>
            )}
            {component.media && (
              <ProjectSectionMedia layout={component.mediaLayout}>
                <Media data={component.media} {...component} />
              </ProjectSectionMedia>
            )}
          </Fragment>
        )

      case "contentBlockSimple":
        return (
          <ProjectSectionText
            key={component._key}
            layout={component.contentLayout}
          >
            {component.content && <PortableText blocks={component.content} />}
          </ProjectSectionText>
        )

      case "mediaCollection":
        return (
          <ProjectSectionMedia
            layout={component.mediaLayout}
            key={component._key}
          >
            <Media data={component.gallery} {...component} />
          </ProjectSectionMedia>
        )
      default:
        return null
    }
  })

  return <ProjectSectionGrid>{content}</ProjectSectionGrid>
}

export default ProjectSections
