import React from "react"
import { ContactLink, ContactWrapper } from "./styles"

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:e.tayyem@gmail.com"
      >
        email
      </ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="tel:00962796659649"
      >
        mobile
      </ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Eytyy"
      >
        github
      </ContactLink>
    </ContactWrapper>
  )
}

export default Contact
