import React from "react"
import { List } from "../../styles/layout"
import ContactSimple from "../Contact/ContactSimple"

const Home = ({ data }) => {
  return (
    <List>
      <ContactSimple />
    </List>
  )
  // return (data._rawContent || []).map(c => {
  //   switch (c._type) {
  //     case "contentList":
  //       return <ContentList key={c._key} {...c} />
  //     case "contentBlockSimple":
  //       return <SimpleContentBlock key={c._key} {...c} />
  //     default:
  //       return null
  //   }
  // })
}

export default Home
