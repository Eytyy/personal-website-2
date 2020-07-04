import React from "react"
import ExternalLink from "../ExternalLink"
import { H2, Body } from "../../styles/typography"
import { Collaborators, Collaborator } from "./project-collaborators.styles"

const ProjectCollaborators = ({ content }) => {
  return (
    <Collaborators>
      <H2>Collaborators</H2>
      <Body>
        {content.map(({ collaborator, role, _key }) => (
          <Collaborator key={_key}>
            {collaborator.link ? (
              <ExternalLink to={collaborator.link}>
                {collaborator.name} – {role}
              </ExternalLink>
            ) : (
              <>
                {collaborator.name} – {role}
              </>
            )}
          </Collaborator>
        ))}
      </Body>
    </Collaborators>
  )
}

export default ProjectCollaborators
