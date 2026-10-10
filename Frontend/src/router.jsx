import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./feature/auth/pages/Login";
import Register from "./feature/auth/pages/Register";
import Feed from "./feature/post/pages/Feed";
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
