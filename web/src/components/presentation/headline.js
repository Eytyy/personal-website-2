import React from "react"
import PortableText from "../PortableText"
import {
  HeadlinePage,
  PresentationFooter,
  PresentationHeader,
  PresentationHeadline,
} from "./style"

const Headline = props => {
  const { headline, title, subTitle } = props
  return (
    <HeadlinePage color="invert">
      <PresentationHeader color="invert">
        {title && <div className="heading">{title}</div>}
        {subTitle && <div className="subHeading">{subTitle}</div>}
      </PresentationHeader>
      <PresentationHeadline>
        <PortableText blocks={headline} />
      </PresentationHeadline>
      <PresentationFooter color="invert"></PresentationFooter>
    </HeadlinePage>
  )
}

export default Headline
