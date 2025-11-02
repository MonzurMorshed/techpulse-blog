import PostList from './components/Post/PostList';


export default async function Home() {

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
        <PostList />
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