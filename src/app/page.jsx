import PostCard from "./Components/PostCard";

import { getPost } from "@/lib/api";

export default async function Home() {
  const data = await getPost();
  return (
    <section className="h-screen">
    <div className="flex justify-center">
      <div className="w-fit p-10">
        <PostCard data={data}/>
      </div>
    </div>
    </section>
  );
}
