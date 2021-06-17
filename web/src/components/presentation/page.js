import React from "react"
import Figure from "../media/figure"
import Gif from "./gif"
import Headline from "./headline"
import Text from "./text"
import SvgSlide from "./svgSlide"

const PresentationPage = ({ _type, _key, ...props }) => {
  switch (_type) {
    case "presentImage":
      return <Figure image={props} />
    case "presentText":
      return <Text {...props} />
    case "presentHeadline":
      return <Headline {...props} />
    case "svg":
      return <SvgSlide _key={_key} {...props} />
    default:
      return <Gif {...props} />
  }
}

export default PresentationPage
