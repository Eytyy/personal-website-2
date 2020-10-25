import React from "react"
import { getURL } from "../lib/helpers"
import { Internal } from "./Links.styles"

const InternalLink = ({ children, type, slug }) => {
  const link = getURL({
    type,
    slug: slug.current,
  })

  return <Internal to={link}>{children}</Internal>
}

export default InternalLink
