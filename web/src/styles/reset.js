import { css } from "@emotion/core"

export default css`
  html {
    box-sizing: border-box;
  }

  * {
    font-weight: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  img {
    height: auto;
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  p {
    margin: 0 0 1.5em;
  }
  header,
  video,
  article,
  section,
  main,
  nav,
  footer {
    display: block;
  }

  svg {
    display: block;
  }
`
