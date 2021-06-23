import React from "react"
import { Global, css } from "@emotion/core"
import { fonts } from "./vars"
import { breakpoints, at } from "./utils"

import Bold from "../fonts/GT-Eesti-Text-Bold.woff2"
import Light from "../fonts/GT-Eesti-Text-Light.woff2"
import reset from "./reset"

const styles = css`
  ${reset}
  @font-face {
    font-family: "GT Esti Thin";
    src: url(${Light}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "GT Esti Bold";
    src: url(${Bold}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --app-height: 100%;
  }

  body {
    font-family: ${fonts.regular};
    font-size: 14px;
    ${at(breakpoints.tablet)} {
      font-size: 16px;
    }
  }

  strong {
    font-family: ${fonts.bold};
  }

  ul {
    padding: 0;
  }
`
export default () => <Global styles={styles} />
