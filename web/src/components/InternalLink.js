import React from "react"
import { getURL } from "../lib/helpers"
import { Internal } from "./Links.styles"

const InternalLink = ({ children, _type, slug }) => {
  const link = getURL({
    _type,
    slug: slug.current,
  })
  return <Internal to={link}>{children}</Internal>
}

export default InternalLink
