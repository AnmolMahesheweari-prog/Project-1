import Posts from "../components/Posts";
import "../style/feed.scss";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Feed() {
  const { feed, Loading, handleFeed } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  if (Loading || !feed) {
    return (
      <main>
        <h1>feed is loading..</h1>
      </main>
    );
  }
  console.log(feed);
  return (
    <>
      <div className="feed">
        <Navbar />
        {feed.map((post) => {
          return <Posts user={post.user} post={post} />;
        })}
      </div>
    </>
  );
}

export default Feed;
