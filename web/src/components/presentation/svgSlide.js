import React from "react"
import SvgEl from "../media/SvgEl"

import { PresentationPageWrapper, PresentationHeader } from "./style"

const SvgSlide = ({ caption, code }) => {
  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {caption && <div className="caption">{caption}</div>}
      </PresentationHeader>
      <SvgEl markup={code} />
    </PresentationPageWrapper>
  )
}

export default SvgSlide
