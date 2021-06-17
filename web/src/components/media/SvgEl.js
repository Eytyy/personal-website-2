import React from "react"

const SvgEl = ({ markup }) => {
  return (
    <div className="svg_wrapper" dangerouslySetInnerHTML={{ __html: markup }} />
  )
}

export default SvgEl
