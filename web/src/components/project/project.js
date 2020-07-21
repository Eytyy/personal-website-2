import React from "react"
import Media from "../media/media"
import { H2 } from "../../styles/typography"
import PortableText from "../PortableText"
import ProjectSections from "./project-sections"

import { ProjectSectionText } from "./project-section.styles"
import {
  ProjectMain,
  ProjectFooter,
  NextPost,
  MainTitle,
  ProjectHeader,
  ProjectMainMedia,
} from "./project.styles"
import ProjectCollaborators from "./project-collaborators"
import ProjectLinks from "./project-links"
import InternalLink from "../InternalLink"

const Project = props => {
  const {
    title,
    mainMedia,
    _rawDescription,
    _rawSections,
    role,
    category,
    collaborators,
    links,
    next,
  } = props
  return (
    <article>
      <ProjectMain>
        <ProjectMainMedia>
          <Media data={mainMedia} />
        </ProjectMainMedia>
        <ProjectHeader>
          {category && <div>– {category.title}</div>}
          <MainTitle>{title}</MainTitle>
          {role && <div>{role}</div>}
        </ProjectHeader>
        <ProjectSectionText>
          <PortableText blocks={_rawDescription} />
        </ProjectSectionText>
      </ProjectMain>
      {_rawSections && <ProjectSections sections={_rawSections} />}
      <ProjectFooter>
        {collaborators && collaborators.length > 0 && (
          <ProjectCollaborators content={collaborators} />
        )}
        {links && links.length > 0 && <ProjectLinks content={links} />}
        <NextPost>
          <InternalLink {...next}>
            <H2 className="overlay">&rarr;</H2>
          </InternalLink>
        </NextPost>
      </ProjectFooter>
    </article>
  )
}

export default Project
