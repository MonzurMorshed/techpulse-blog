'use client';

import React, { useEffect, useState } from 'react';

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

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading posts...</div>;
  }

  if (!posts.length) {
    return <div className="text-center py-10 text-gray-500">No posts found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <div className="text-sm text-gray-500 flex items-center justify-between">
              <span>{post.author?.name ?? 'Unknown Author'}</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
