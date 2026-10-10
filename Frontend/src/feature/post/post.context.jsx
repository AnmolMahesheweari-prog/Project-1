import { createContext, useState } from "react";

export const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <postContext.Provider
      value={{ post, setPost, feed, setFeed, loading, setLoading }}
    >
      {children}
    </postContext.Provider>
  );
};
