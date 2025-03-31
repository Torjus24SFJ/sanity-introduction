import { useRouter } from "next/router";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "q4iidoz7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || "Main image"}
          className="w-fit h-100"
        />
      )}
    </div>
  );
}


  export async function getStaticPaths() {
    const query = `*[_type == "post"]{ slug }`;
    const posts = await client.fetch(query);
    const paths = posts.map((post) => ({
      params: { slug: post.slug.current },
    }));
    return { paths, fallback: "blocking" };
  }

  export async function getStaticProps({ params }) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          body,
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          }
        }`;
    const post = await client.fetch(query, { slug: params.slug });
    return { props: { post: post || null }, revalidate: 60 };
  }
