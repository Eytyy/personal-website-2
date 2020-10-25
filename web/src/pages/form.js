import React, { useState } from "react"
import sanityClient from "@sanity/client"
import uuid from "@sanity/uuid"

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const client = sanityClient({
    projectId: "ky5p4eno",
    dataset: "production",
    token:
      "skOggKN9ZYs6KOJCOuTvijbdxGHKLRUaAgpQumnLHVFbQNAMi5TFz1DdFfuAByFTYTj4vwHw8GNEJVJZQgKjUQkOq4jchv5OgJIh9t3Cf7HLdx34FCD71SjVeHuh3tY8ZJVKr3Wf71e3eyIM1xk4ZTg8w9Jc8photvAGuSr4xab2axcGaEHm",
  })

  console.log(client)

  const handleSubmit = e => {
    const doc = {
      _type: "submission",
      submissionInput: [
        {
          field: "name",
          value: state.name,
          key: uuid(),
        },
        {
          field: "email",
          value: state.email,
          key: uuid(),
        },
        {
          field: "message",
          value: state.message,
          key: uuid(),
        },
      ],
    }

    client
      .create(doc)
      .then(res => {
        console.log(`Submission was created, document ID is ${res._id}`)
      })
      .catch(e => console.log(e))

    e.preventDefault()
  }

  const onChange = e => {
    const name = e.target.name
    const value = e.target.value

    setState(state => ({
      ...state,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input onChange={onChange} type="text" name="name" id="name" />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input onChange={onChange} type="email" name="email" id="email" />
      </div>
      <br />
      <label htmlFor="message">Message</label>
      <br />
      <br />
      <textarea
        onChange={onChange}
        name="message"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
