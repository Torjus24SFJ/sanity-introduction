import PostCard from "./Components/PostCard";

import { getPost } from "@/lib/api";

export default async function Home() {
  const data = await getPost();
  return (
    
    <div>
      <PostCard data={data}/>
    </div>
  );
}
