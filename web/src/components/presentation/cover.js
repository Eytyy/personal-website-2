import React from "react"
import { Logo } from "../header/styles"
import { CoverWrapper } from "./cover.styles"
import { PresentationFooter, PresentationHeader } from "./style"

const Cover = ({ title, scope, date }) => {
  return (
    <CoverWrapper>
      <PresentationHeader color="invert">
        <Logo color="invert" />
        <div className="subHeading">{date}</div>
      </PresentationHeader>
      <PresentationFooter color="invert">
        <div className="client">{title}</div>
        <div className="scope">{scope}</div>
      </PresentationFooter>
    </CoverWrapper>
  )
}

export default Cover
