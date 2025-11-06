"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  author?: {
    name: string;
  };
}

export default function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  console.log("Params:", params?.slug);

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/posts/${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
      {/* <p className="text-sm text-gray-500 mb-4">By {post.author.name}</p> */}
      <div className="mb-8">{post?.excerpt}</div>

      
    </div>
  );
}
