// import prisma from '@/lib/prisma';
// import PostList from '@/components/PostList';


export default async function Home() {

  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 5, // show latest 5 posts
  });

  // const posts = [
  //   { id: 1, title: "Understanding Next.js 13", excerpt: "An introduction to the new features in Next.js 13.", publishedAt: "2024-06-01" },
  //   { id: 2, title: "JavaScript ES2024 Features", excerpt: "A look at the latest features added to JavaScript in 2024.", publishedAt: "2024-05-28" },
  //   { id: 3, title: "CSS Grid vs Flexbox", excerpt: "When to use CSS Grid and when to use Flexbox in your layouts.", publishedAt: "2024-05-20" },
  //   { id: 4, title: "TypeScript Tips and Tricks", excerpt: "Enhance your TypeScript skills with these useful tips.", publishedAt: "2024-05-15" },
  //   { id: 5, title: "Building Accessible Web Apps", excerpt: "Best practices for creating accessible web applications.", publishedAt: "2024-05-10" },
  // ];

  return (
    <section className="space-y-12">
      {/* Hero / Welcome Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-4xl font-bold mb-2">Welcome to TechPulse</h2>
        <p className="text-lg">Explore the latest articles on tech, coding, and lifestyle. Stay informed and inspired!</p>
      </div>


      {/* Latest Posts Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Latest Posts</h3>
        {/* <PostList posts={posts} /> */}
      </div>


      {/* Optional call-to-action / newsletter section */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h4 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
        <p className="mb-4">Get notified when we publish new articles.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-2">
          <input type="email" placeholder="Your email" className="p-2 border rounded w-full sm:w-auto" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
        </form>
      </div>
    </section>
  );
}