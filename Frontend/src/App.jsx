import "./feature/shared/global.scss";
import AppRoute from "./router";
import { AuthProvider } from "./feature/auth/auth.context";
function App() {
  return (
    <>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </>
  );
}

export default App;
