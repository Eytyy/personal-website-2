import React from "react"
import ContentList from "../contentList"
import SimpleContentBlock from "../SimpleContentBlock"

const Home = ({ data }) => {
  return (data._rawContent || []).map(c => {
    switch (c._type) {
      case "contentList":
        return <ContentList key={c._key} {...c} />
      case "contentBlockSimple":
        return <SimpleContentBlock key={c._key} {...c} />
      default:
        return null
    }
  })
}

export default Home
