import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const { user, handleLogin, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin(username, email, password);
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
          <h1>Register Page</h1>
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
                setEmail(e.target.value);
              }}
              type="text"
              name="email"
              placeholder="enter email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="enter password"
            />

            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
