import React from "react"
import { ContactLink } from "./Contact.styles"

const ContactSimple = () => {
  return (
    <>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:e.tayyem@gmail.com"
      ></ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="tel:00962796659649"
      ></ContactLink>
      <ContactLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Eytyy"
      ></ContactLink>
    </>
  )
}

export default ContactSimple
