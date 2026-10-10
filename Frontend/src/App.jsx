import "./feature/shared/global.scss";
import AppRoute from "./router";
import { AuthProvider } from "./feature/auth/auth.context";
import { PostProvider } from "./feature/post/post.context";
function App() {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <AppRoute />
        </PostProvider>
      </AuthProvider>
    </>
  );
}

export default App;
