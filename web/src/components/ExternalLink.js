import React from "react"
import { External } from "./Links.styles"

const ExternalLink = ({ children, to }) => {
  return (
    <External target="_blank" rel="noreferrer noopener" href={to}>
      {children}
    </External>
  )
}

export default ExternalLink
