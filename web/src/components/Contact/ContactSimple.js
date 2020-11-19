import React from "react"
import { Preview, SimpleTitle } from "../ContentPreview/ContentPreview.styles"
import { ContactLink } from "./Contact.styles"

const ContactSimple = () => {
  return (
    <div>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:e.tayyem@gmail.com"
        >
          <SimpleTitle>email / </SimpleTitle>
          e.tayyem@gmail.com
        </ContactLink>
      </Preview>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="tel:00962796659649"
        >
          <SimpleTitle>phone / </SimpleTitle>
          +962 79 6659 649
        </ContactLink>
      </Preview>
      <Preview>
        <ContactLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Eytyy"
        >
          <SimpleTitle>github.</SimpleTitle>
          Eytyy
        </ContactLink>
      </Preview>
    </div>
  )
}

export default ContactSimple
