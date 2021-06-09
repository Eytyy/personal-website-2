import React from "react"
import { Preview, SimpleTitle } from "../ContentPreview/ContentPreview.styles"
import { ContactLink } from "./Contact.styles"

const ContactSimple = () => {
  return (
    <>
      <Preview>
        <SimpleTitle>🏗 ... </SimpleTitle>
      </Preview>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:e.tayyem@gmail.com"
        >
          <SimpleTitle>email / </SimpleTitle>
        </ContactLink>
      </Preview>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="tel:00962796659649"
        >
          <SimpleTitle>phone / </SimpleTitle>
        </ContactLink>
      </Preview>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Eytyy"
        >
          <SimpleTitle>github</SimpleTitle>
        </ContactLink>
      </Preview>

      <Preview>
        <SimpleTitle> 👋 </SimpleTitle>
      </Preview>
    </>
  )
}

export default ContactSimple
