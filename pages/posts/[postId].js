import Format from "../../layout/format"
import Author from "../../components/_child/author"
import Image from "next/image"
import Ralated from "../../components/_child/ralated"
import getPost from "../../lib/helper"
import fetcher from "../../lib/fetcher"
import Spinner from "../../components/_child/spinner"
import ErrorComponent from "../../components/_child/error"
import { useRouter } from "next/router"
import { SWRConfig } from "swr"
import CommentSection from "../../components/_child/CommentSection"

export default function Page({ fallback }) {
  const router = useRouter()
  const { postId } = router.query
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)

  if (isLoading) return <Spinner />
  if (isError) return <ErrorComponent />

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data} />
    </SWRConfig>
  )
}

function Article({ title, img, subtitle, description, author, comments }) {
  // Comment Section

  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author} /> : null}
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {title || "No Title"}
          </h1>

          <p className="text-gray-500 text-xl text-center">
            {subtitle || "No Subtitle"}
          </p>

          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} alt="img" />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "No Description"}
          </div>
        </div>

        {/* <div className="comment-section">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-md mb-4">
                <p>
                  <strong className="font-bold">{comment.name}</strong>
                </p>
                <p>
                  <strong className="italic font-light">{comment.email}</strong>
                </p>
                <p>{comment.comment}</p>
              </div>
            ))
          )}
        </div> */}
        <CommentSection comments={comments} />
        <Ralated />
      </section>
    </Format>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId)

  return {
    props: {
      fallback: {
        "/api/posts": posts
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPost()
  const paths = posts.map((value) => ({
    params: {
      postId: value.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}
