import { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
function App() {
  const [refreshPost, setRefreshPost] = useState(false);
  return (
    <div className="container">
      <h2>Create Post !</h2>
      <PostCreate refreshPost={refreshPost} setRefreshPost={setRefreshPost} />
      <hr />
      <h2>Posts</h2>
      <PostList refreshPost={refreshPost} setRefreshPost={setRefreshPost} />
    </div>
  );
}

export default App;
