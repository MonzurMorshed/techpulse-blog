import PostDetails from '@/app/components/Post/Details/PostDetails';


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
        <PostDetails />
      </div>


      
    </section>
  );
}