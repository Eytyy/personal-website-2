import React from "react"
import ContentList from "./contentList"

const Page = ({ data }) => {
  const content = (data._rawContent || [])
    // .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case "contentList":
          el = <ContentList key={c._key} {...c} />
          break
        default:
          el = null
      }
      return el
    })

  return <>{content}</>
}

export default Page
