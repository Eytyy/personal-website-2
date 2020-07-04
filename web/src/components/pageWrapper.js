import React from "react"
import Contact from "../containers/contact"

const PageWrapper = ({ children, location }) => {
  const pathname = (location && location.pathname) || null
  return pathname && pathname === "/contact" ? (
    <Contact>{children}</Contact>
  ) : (
    <>{children}</>
  )
}

export default PageWrapper
