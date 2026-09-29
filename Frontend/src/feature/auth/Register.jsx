import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" placeholder="enteru sername " />

            <input type="text" name="email" placeholder="enter email" />

            <input
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
