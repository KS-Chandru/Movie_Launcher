import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter

  return (
    <div>
      <h1>Blog Post: {id}</h1>
      <p>This is the blog post with ID: {id}</p>
    </div>
  );
}
