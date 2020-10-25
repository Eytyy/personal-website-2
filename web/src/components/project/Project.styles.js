import styled from "@emotion/styled"
import { headline } from "../../styles/typography"
import { mq, spacing } from "../../styles/utils"
import { ProjectSectionMedia } from "./Sections.styles"

export const ProjectMain = styled.div`
  margin-bottom: ${spacing.medium};
  ${mq.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${spacing.medium};
  }
`

export const MainTitle = styled.h1`
  ${headline}
  font-size: 3rem;
  margin: 0.1em 0;
  ${mq.bigscreen} {
    font-size: 3.4rem;
  }
`

export const ProjectHeader = styled.header`
  margin-bottom: 30px;
  grid-column: auto / span 2;
  ${mq.tablet} {
    margin-bottom: 0px;
  }
`
export const ProjectMainMedia = styled(ProjectSectionMedia)`
  margin: 0px -40px 30px;
  ${mq.tablet} {
    margin: 0px;
  }
`

export const ProjectFooter = styled.div`
  margin-top: ${spacing.medium};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${spacing.medium};
`

export const NextPost = styled.div``

export const ProjectHeaderTop = styled.div`
  margin-bottom: 2em;
`

export const OtherProjects = styled.div`
  margin-top: ${spacing.small};
  ${mq.desktop} {
    margin-top: ${spacing.medium};
  }
  ${mq.bigscreen} {
    margin-top: ${spacing.big};
  }
`

export const ProjectLink = styled.h2`
  ${headline}
  font-size: 1.8rem;
  ${mq.bigscreen} {
    font-size: 2.2rem;
  }
`
