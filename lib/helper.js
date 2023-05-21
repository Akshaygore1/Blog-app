const baseURL = "http://localhost:3000/api/posts"

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  const res = await fetch(`${baseURL}`)
  const posts = await res.json()

  if (id) {
    const post = posts.find((value) => value.id == id)
    return addCommentFunction(post) // Call the addCommentFunction to add comments to the post
  }

  return posts
}

// Function to add comments to a post
async function addCommentFunction(post) {
  // Capture user input or retrieve comment data
  console.log(post)
  const commentData = {
    postId: post.id // Set the postId for the comment
    // ... other comment data
  }

  // Send a POST request to your comment API endpoint
  const res = await fetch("http://localhost:3000/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commentData)
  })

  if (res.ok) {
    // Comment added successfully
    const comment = await res.json()
    post.comments.push(comment) // Add the comment to the post's comments array
  } else {
    // Handle error case
    console.error("Failed to add comment")
  }

  return post
}
