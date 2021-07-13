import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

import Global from "../../styles/Global.js"
import { LayoutWrapper } from "./styles.js"
import Header from "../header/index.js"
import Navigation from "../navigation/index.js"

const Layout = ({ children, location }) => {
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
      <LayoutWrapper>
        <Header />
        <Navigation />
        <Global />
        <main>{children}</main>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
