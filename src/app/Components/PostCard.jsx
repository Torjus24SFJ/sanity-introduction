import Link from "next/link";

export default function PostCard({ data }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-white">
      {data.map((post, index) => {
        return (
          <Link key={post._id || index} href={`/posts/`}>
            <div className="p-4">
              <h1 className="text-red-500">{post.title}</h1>
              <p className="text-white">{post.body}</p>
            </div>
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || "Main image"}
                className="w-fit h-100"
                />
            )}
          </Link>
        );
      })}
    </div>
  );
}
