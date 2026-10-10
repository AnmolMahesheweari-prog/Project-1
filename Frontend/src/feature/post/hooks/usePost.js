import { useContext } from "react";
import { getFeed } from "../services/post.api";
import { postContext } from "../post.context";

export const usePost = () => {
  const context = useContext(postContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleFeed = async () => {
    setLoading(true);
    try {
      const data = await getFeed();
      setFeed(data.feeds);
    } catch (error) {
      console.error("Feed fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleFeed,
    feed,
    loading,
    post,
  };
};
