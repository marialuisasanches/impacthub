import AppLayout from "@/components/AppLayout";
import PostCard from "@/components/PostCard";
import { mockPosts } from "@/data/mockData";

const Home = () => {
  return (
    <AppLayout>
      <div className="max-w-xl mx-auto space-y-4">
        <h1 className="text-xl font-bold mb-2">Feed</h1>
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Home;
