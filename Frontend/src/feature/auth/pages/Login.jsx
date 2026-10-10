import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import '../style/form.scss'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, loading, handleLogin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    await handleLogin(username, password);
    console.log(user);
    navigate("/");
  }

  if (loading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
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
