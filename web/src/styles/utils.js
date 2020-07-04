import { css } from "@emotion/core"

export const breakpoints = {
  mobile: 420,
  mobile__l: 580,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  bigscreen: 1920,
}

export const spacing = {
  small: 40,
  medium: 90,
  big: 135,
}

export let mq = {}

Object.keys(breakpoints).forEach(key => {
  mq[key] = `@media (min-width: ${breakpoints[key]}px)`
})

export const wrapFull = css`
  padding: ${`0 ${spacing.small}px`};
  ${mq.desktop} {
    padding: ${`0 ${spacing.medium}px`};
  }
  ${mq.bigscreen} {
    padding: ${`0 ${spacing.big}px`};
    max-width: 1920px;
    margin: 0 auto;
  }
`
export const wrapFixed = css`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  ${mq.desktop} {
    max-width: 1440px;
    padding: 0 60px;
  }
  ${mq.bigscreen} {
    max-width: 1920px;
    padding: 0 80px;
  }
`

export const hide = css`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
