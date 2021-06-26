import React from "react"
import { ContactLink } from "./Contact.styles"

const ContactSimple = () => {
  return (
    <div>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:e.tayyem@gmail.com"
      >
        send an email
      </ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="tel:00962796659649"
      >
        call me
      </ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Eytyy"
      >
        gitHUBz
      </ContactLink>
    </div>
  )
}

export default ContactSimple
