import { SERVER_URL } from "@/constants/const";
import Post from "@/components/Post/Post";

async function getPost(id: string) {
  const post = await fetch(`${SERVER_URL}/posts/${id}`);

  if (!post.ok) {
    throw new Error("Failed to fetch data");
  }

  return post.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <>
      <Post post={post} />
    </>
  );
}
