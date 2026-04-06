import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import PostCard from "@/components/PostCard";
import CreatePost from "@/components/CreatePost";
import { mockPosts, currentUser } from "@/data/mockData";
import type { Post } from "@/data/mockData";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleNewPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <AppLayout>
      <div className="max-w-xl mx-auto space-y-4 w-full">
        <h1 className="text-xl font-bold mb-2">Feed</h1>

        {currentUser.type === "ong" && <CreatePost onPost={handleNewPost} />}

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Home;
