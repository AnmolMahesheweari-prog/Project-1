import "../style/nav.scss";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1>Instagram</h1>

      <button
        onClick={() => {
          console.log("Button clicked");
          navigate("/create-post");
        }}
      >
        Create Post
      </button>
    </div>
  );
};

export default Navbar;
