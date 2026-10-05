import { Link } from "react-router";
import "../style/form.scss";
import { useAuth } from "../Hooks/auth.hooks";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { user, loding, handleLogin } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handSubmit(e) {
    e.preventDefault();

    await handleLogin(username, password);
    console.log("user login,,,");
    navigate("/");
  }

  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handSubmit}>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              placeholder="enter username or email"
            />

            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder=" enter passward"
            />

            <button type="submit">Login</button>
            <p>
              already have an account <Link to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
