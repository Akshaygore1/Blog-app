import React, { useState } from "react"

const CommentSection = ({ comments }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      comment: "Great article!"
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
      comment: "Thanks for sharing!"
    },
    {
      id: 3,
      name: "Bob",
      email: "bob@example.com",
      comment: "I have a question..."
    }
  ])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleAddComment = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Please enter your name and comment.")
      return
    }

    if (email.trim() !== "" && !validateEmail(email)) {
      alert("Please enter a valid email address.")
      return
    }

    const newComment = {
      id: comments.length + 1,
      name,
      email,
      comment
    }

    setComments([...comments, newComment])
    setName("")
    setEmail("")
    setComment("")
  }

  return (
    <div className="comment-section">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-md mb-4">
            <p>
              <strong className="font-bold">{comment.name}</strong>
            </p>
            <p>{comment.comment}</p>
          </div>
        ))
      )}
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
        <div className="mb-2">
          <label htmlFor="name" className="block font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="comment" className="block font-bold">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className="border rounded-md p-2 w-full"
          ></textarea>
        </div>
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  )
}

export default CommentSection
