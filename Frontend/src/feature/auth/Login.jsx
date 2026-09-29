import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              name="username"
              placeholder="enter username or email"
            />

            <input
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
