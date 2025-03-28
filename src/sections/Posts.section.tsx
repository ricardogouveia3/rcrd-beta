import { useState, useEffect } from "react";
import { blogAPI } from "../api/posts";

import Card from "../components/Card/Card";
import PostsItem from "../components/PostItem";

import { PostProps } from "../types/Post.type";
import { useBreakpoint } from "../hooks/useBreakpoint";
import ButtonLink from "../components/Buttons/ButtonLink";
import gridClassNames from "@layout/grid";
import {useTranslation} from "react-i18next";

export default function PostsSection() {
const { t } = useTranslation();
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
      });
  }, [maxRendered]);

  return (
    <Card classNames={`${gridClassNames.posts}`} loading={loading}>
      <header className="flex flex-row justify-between mb-4 items-center">
        <h4 className="text-lg/7 font-medium text-gray-950 dark:text-white mb-0">{t('posts.title')}</h4>
        <ButtonLink round="lg" link={t('posts.link')}>{t('posts.seeAll')}</ButtonLink>
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
