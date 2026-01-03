import axios from "axios";

export default async function Posts({
  params,
}: {
  params: { post_id: string };
}) {
  const post_id = (await params).post_id;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = response.data;

  return (
    <div>
      <div>Post: {post_id}</div>
      <div>Title: {data.title}</div>
      <div>Body: {data.body}</div>
    </div>
  );
}
