import React from "react"
import PortableText from "./PortableText"

const SimpleContentBlock = ({ content }) => {
  return content && <PortableText blocks={content} />
}

export default SimpleContentBlock
