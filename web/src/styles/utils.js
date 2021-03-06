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
  small: "40px",
  medium: "60px",
  big: "120px",
}

export const at = breakpoint => `@media (min-width: ${breakpoint}px)`

export const wrapFixed = css`
  max-width: 1200px;
  padding: 0 ${spacing.small};
  margin: 0 auto;
  ${at(breakpoints.desktop)} {
    max-width: 1440px;
    padding: 0 60px;
  }
  ${at(breakpoints.bigscreen)} {
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
