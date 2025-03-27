import Link from 'next/link'

export default function PostCard({ data }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/posts/`}>
        <h2 className="text-xl font-bold mb-2">{data[0].title}</h2>
        {data[0].body && (
          <p className="text-gray-600 line-clamp-2">
            {data[0].body}
          </p>
        )}
      </Link>
    </div>
  )
}