import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function hadlesubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
      });
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
