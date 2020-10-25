import styled from "@emotion/styled"
import { mq, wrapFull, spacing } from "./utils"
import { layout } from "./vars"

export const Grid = styled.div`
  ${mq.tablet} {
    display: grid;
    grid-gap: ${spacing.small};
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${spacing.medium};
  }
  ${mq.bigscreen} {
    grid-gap: ${spacing.big};
  }
`

export const ProjectGrid = styled.div`
  ${mq.tablet} {
    display: grid;
    grid-gap: ${spacing.small};
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.medium};
  }
  ${mq.bigscreen} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.big};
  }
`

export const LayoutWrapper = styled.div`
  ${wrapFull}
 
  padding: ${layout.headerHeight} ${spacing.small} ${spacing.small};
  ${mq.desktop} {
    padding: ${layout.headerHeight} ${spacing.medium} ${spacing.medium};
  }
  ${mq.bigscreen} {
    padding: ${layout.headerHeight} ${spacing.big} ${spacing.big};
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
