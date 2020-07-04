import React from "react"
import ContentList from "./contentList"
import SimpleContentBlock from "./SimpleContentBlock"
import PageWrapper from "./pageWrapper"

const Page = ({ data, ...props }) => {
  const content = (data._rawContent || [])
    // .filter((c) => !c.disabled)
    .map((c, i) => {
      switch (c._type) {
        case "contentList":
          return <ContentList key={c._key} {...c} />
        case "contentBlockSimple":
          return <SimpleContentBlock key={c._key} {...c} />
        default:
          return null
      }
    })

  return <PageWrapper {...props}>{content}</PageWrapper>
}

export default Page
