import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Media from "../media/media"
import PortableText from "../PortableText"
import Sections from "./Sections"
import { ProjectSectionText } from "./Sections.styles"
import {
  ProjectMain,
  ProjectFooter,
  MainTitle,
  ProjectHeader,
  ProjectMainMedia,
  ProjectHeaderTop,
  OtherProjects,
  ProjectLink,
} from "./Project.styles"
import Collaborators from "./Collaborators"
import Links from "./Links"
import ExternalLink from "../ExternalLink"
import ContentList from "../contentList"

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
    link,
    id,
  } = props

  const { projects } = useStaticQuery(graphql`
    query otherProjectsQuery {
      projects: allSanityProject(limit: 10) {
        all: nodes {
          id
          _id
          ...ContentPreview
        }
      }
    }
  `)

  const otherProjects = projects.all.filter(project => project.id !== id)
  return (
    <article>
      <ProjectMain>
        {mainMedia && mainMedia.length > 0 && (
          <ProjectMainMedia layout="big">
            <Media data={mainMedia} />
          </ProjectMainMedia>
        )}
        <ProjectHeader>
          <ProjectHeaderTop>
            {category && <div>– {category.title}</div>}
            <MainTitle>{title}</MainTitle>
            {role && <div>{role}</div>}
          </ProjectHeaderTop>

          {_rawDescription && (
            <ProjectSectionText>
              <PortableText blocks={_rawDescription} />
            </ProjectSectionText>
          )}
        </ProjectHeader>
      </ProjectMain>
      {_rawSections && <Sections sections={_rawSections} />}
      <ProjectFooter>
        {collaborators && collaborators.length > 0 && (
          <Collaborators content={collaborators} />
        )}
        {links && links.length > 0 && <Links content={links} />}
        {link && (
          <ProjectLink>
            <ExternalLink to={link}>visit website</ExternalLink>
          </ProjectLink>
        )}
      </ProjectFooter>
      <OtherProjects>
        <ContentList content={otherProjects} displayType="list" />
      </OtherProjects>
    </article>
  )
}

export default Project
