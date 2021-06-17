import React from "react"
import PortableText from "../PortableText"
import {
  PresentationPageWrapper,
  PresentationHeader,
  PresentationInnerText,
  PresentationFooter,
} from "./style"

const Text = props => {
  const { title, subTitle, body } = props
  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {title && <div className="heading">{title}</div>}
        {subTitle && <div className="subHeading">{subTitle}</div>}
      </PresentationHeader>
      <PresentationInnerText>
        <PortableText blocks={body} />
      </PresentationInnerText>
      <PresentationFooter></PresentationFooter>
    </PresentationPageWrapper>
  )
}

export default Text
