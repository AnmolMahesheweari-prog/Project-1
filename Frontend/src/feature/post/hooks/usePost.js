import { useContext, useEffect } from "react";
import { getFeed, createPost } from "../services/post.api.jsx";
import { postContext } from "../post.context";

export const usePost = () => {
  const context = useContext(postContext);
  const { loading, setLoading, post, feed, setFeed } = context;

  const handleFeed = async () => {
    setLoading(true);
    try {
      const data = await getFeed();
      setFeed(data.feeds.reverse());
    } catch (error) {
      console.error("Feed fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async (imgFile, caption) => {
    setLoading(true);
    try {
      const data = await createPost(imgFile, caption);
      setFeed([data.post, ...feed]);
    } catch (error) {
      console.error("Feed fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFeed();
  }, []);
  return {
    handleFeed,
    handlePost,
    feed,
    loading,
    post,
  };
};
