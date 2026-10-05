import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./feature/auth/pages/Login";
import Register from "./feature/auth/pages/Register";
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<h1> welcome to react 4 layer architecture </h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
