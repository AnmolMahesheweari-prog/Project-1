import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Hooks/auth.hooks";
import "../style/form.scss";
import { useNavigate } from "react-router";

const Register = () => {
  const { user, loding, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function hadlesubmit(e) {
    e.preventDefault();
    await handleRegister(username, email, password);
    console.log("user register.");
    navigate("/");
  }

  if (loding) {
    return (
      <main>
        <h1>Loding......</h1>
      </main>
    );
  }
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={hadlesubmit}>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              placeholder="enter username "
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
              placeholder=" enter passward"
            />

            <button type="submit">Register</button>
            <p>
              already have an account <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
