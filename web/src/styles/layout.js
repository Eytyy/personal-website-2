import styled from "@emotion/styled"
import { mq, wrapFull, spacing } from "./utils"
import { layout } from "./vars"

export const Grid = styled.div`
  ${mq.tablet} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
  }
  ${mq.bigscreen} {
    grid-gap: 80px;
  }
`

export const ProjectGrid = styled.div`
  ${mq.tablet} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
  }
  ${mq.bigscreen} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 80px;
  }
`

export const LayoutWrapper = styled.div`
  ${wrapFull}
  padding: ${layout.headerHeight} ${spacing.small}px ${spacing.small}px;
  ${mq.desktop} {
    padding: ${layout.headerHeight} ${spacing.medium}px ${spacing.medium}px;
  }
  ${mq.bigscreen} {
    padding: ${layout.headerHeight} ${spacing.big}px ${spacing.big}px;
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
