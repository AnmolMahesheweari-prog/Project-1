import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
