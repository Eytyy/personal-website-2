import styled from "@emotion/styled"
import { mq } from "../../styles/utils"
import { H1 } from "../../styles/typography"
import { ProjectSectionMedia } from "./project-section.styles"

export const ProjectMain = styled.div`
  margin-bottom: 60px;
  ${mq.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 60px;
  }
`

export const MainTitle = styled(H1)`
  margin: 0.1em 0;
  ${mq.bigscreen} {
    font-size: 2.4rem;
  }
`

export const ProjectHeader = styled.header`
  margin-bottom: 30px;
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
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
`

export const NextPost = styled.div`
  cursor: pointer;
  :hover .overlay {
    width: 45px;
    height: 45px;
  }
  .overlay {
    transition: 0.3s;
    z-index: 2;
    background: blue;
    color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
