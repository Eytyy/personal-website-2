import React from "react"
import { ContactWrapper } from "./Contact.styles"

const Contact = () => {
  return (
    <ContactWrapper>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:e.tayyem@gmail.com"
          >
            email
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:00962796659649"
          >
            phone
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Eytyy"
          >
            github
          </a>
        </li>
      </ul>
    </ContactWrapper>
  )
}

export default Contact
