import React from "react"
import Figure from "../media/figure"
import {
  PresentationHeader,
  ImageWrapper,
  PresentationPageWrapper,
} from "./style"

const Img = props => {
  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {props.caption && <div className="caption">{props.caption}</div>}
      </PresentationHeader>
      <ImageWrapper>
        <Figure image={props} />{" "}
      </ImageWrapper>
    </PresentationPageWrapper>
  )
}

export default Img
