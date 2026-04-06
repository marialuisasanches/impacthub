import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CategoryBadge from "./CategoryBadge";
import type { Post } from "@/data/mockData";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
            {post.ongName.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{post.ongName}</p>
            <p className="text-xs text-muted-foreground">{post.createdAt}</p>
          </div>
          <CategoryBadge category={post.category} />
        </div>
        <p className="text-sm leading-relaxed mb-4">{post.content}</p>
        <div className="flex items-center gap-4 pt-3 border-t">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1.5">
            <Heart size={16} /> {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1.5">
            <MessageCircle size={16} /> {post.comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1.5 ml-auto">
            <Share2 size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
