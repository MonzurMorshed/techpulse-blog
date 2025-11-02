'use client';

import React, { useEffect, useState } from 'react';
import PostListSkeleton from './PostListSkeleton';

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        console.log('Fetched posts:', res);
        const data = await res.json();
        setPosts(data.posts);
        // const postData = [
        //   { id: 1, title: "Understanding Next.js 13", excerpt: "An introduction to the new features in Next.js 13.", published: "2024-06-01" },
        //   { id: 2, title: "JavaScript ES2024 Features", excerpt: "A look at the latest features added to JavaScript in 2024.", published: "2024-05-28" },
        //   { id: 3, title: "CSS Grid vs Flexbox", excerpt: "When to use CSS Grid and when to use Flexbox in your layouts.", published: "2024-05-20" },
        //   { id: 4, title: "TypeScript Tips and Tricks", excerpt: "Enhance your TypeScript skills with these useful tips.", published: "2024-05-15" },
        //   { id: 5, title: "Building Accessible Web Apps", excerpt: "Best practices for creating accessible web applications.", published: "2024-05-10" },
        // ];        
        // setPosts(postData);
        
      } catch (error) {
        console.error('Error loading posts:', error);
        setError('Failed to load .');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  
  if (loading) {
    return <PostListSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-10">
        ⚠️ Failed to load posts. Please try again later.
      </div>
    );
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
              <span>{new Date(post.published).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
