import React from "react"
import Gif from "./gif"
import Headline from "./headline"
import Text from "./text"
import SvgSlide from "./svgSlide"
import Img from "./img"
import Grid from "./gird"

const PresentationPage = ({ _type, ...props }) => {
  switch (_type) {
    case "presentImage":
      return <Img {...props} />
    case "presentText":
      return <Text {...props} />
    case "presentHeadline":
      return <Headline {...props} />
    case "svg":
      return <SvgSlide {...props} />

    case "presentGrid":
      return <Grid {...props} />
    default:
      return <Gif {...props} />
  }
}

export default PresentationPage
