import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

import Global from "../../styles/Global.js"
import { PresentationLayoutWrapper } from "./styles.js"
import Footer from "../footer/index.js"

const PresentationLayout = ({ children, location }) => {
  // alternative way to using full view port height instead of 100vh
  // to avoid common layout issues on mobile.
  useLayoutEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--app-height", `${window.innerHeight}px`)
    }
    appHeight()
    window.addEventListener("resize", appHeight)
    return function cleanup() {
      window.removeEventListener("resize", appHeight)
    }
  }, [])

  return (
    <>
      <PresentationLayoutWrapper>
        <Global />
        <main>{children}</main>
        {location?.pathname === "/" && <Footer />}
      </PresentationLayoutWrapper>
    </>
  )
}

PresentationLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PresentationLayout
