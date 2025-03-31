// import PostCard from '@/app/Components/PostCard'
import { client } from '@/lib/sanity'
import Post from './[slug]'
async function getPosts() {
  const query = `*[_type == "post"] {
    title,
    slug,
    body
  }`
  return await client.fetch(query)
}

/**
 * Renders a page displaying blog posts in a responsive grid layout.
 * Fetches posts data asynchronously and maps them to the UI.
 */

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-red-500">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard data={posts} />
      </div>
    </div>
  )
}