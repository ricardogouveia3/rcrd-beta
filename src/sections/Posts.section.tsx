import { useState, useEffect } from "react";
import { blogAPI } from "../api/posts";

import Card from "../components/Card/Card";
import PostsItem from "../components/PostItem";

import { PostProps } from "../types/Post.type";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function PostsSection() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAboveLg } = useBreakpoint("lg");
  const maxRendered = isAboveLg ? 4 : 3;

  useEffect(() => {
    blogAPI.getData()
      .then((data) => {
        setPosts(data.slice(0, maxRendered));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [maxRendered]);

  return (
    <Card classNames="lg:col-start-1 lg:col-span-7 lg:row-start-6 rounded-lg" loading={loading}>
      <header className="flex flex-row justify-between mb-4 items-center">
        <h4 className="text-lg/7 font-medium text-gray-950 dark:text-white mb-0">Latest posts:</h4>
        <a href="https://dev.to/rcrd" target="_blank" className="flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-quartz-l10 w-fit hover:bg-quartz dark:bg-quartz-d70 dark:hover:bg-quartz-d80 border border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30">See all posts</a>
      </header>

      {!loading && (
        <div className="flex flex-col gap-4">
          {posts.map((post: PostProps) => (
            <PostsItem
              title={post.title}
              key={post.id}
              description={post.description}
              link={post.url}
              imgSrc={post.cover_image}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
