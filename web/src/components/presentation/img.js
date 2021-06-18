import React from "react"
import Figure from "../media/figure"
import { PresentationHeader, PresentationPageWrapper } from "./style"

const Img = props => {
  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {props.caption && <div className="caption">{props.caption}</div>}
      </PresentationHeader>
      <Figure image={props} />{" "}
    </PresentationPageWrapper>
  )
}

export default Img
