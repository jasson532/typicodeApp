import { useEffect, useState } from "react";
import { getPostsApi } from "../services/posts/posts.service";
import { IPosts } from "../services/posts/posts.type";

interface IUseTypeCode {
  posts: IPosts[];
  loading: boolean;
  error: string | null;
}

export const useTypeCode = (): IUseTypeCode => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResponse = await getPostsApi();
        setPosts(postResponse);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
