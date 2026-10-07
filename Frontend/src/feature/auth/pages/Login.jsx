import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, loading, handleLogin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1> Login page</h1>

          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              placeholder="enter username"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="enter password"
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
