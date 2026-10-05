import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { Login, Register } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loding, setLoding } = context;

  const handleLogin = async (username, password) => {
    setLoding(true);
    const response = await Login(username, password);
    setUser(response.user);
    setLoding(false);
  };

  const handleRegister = async (username, email, password) => {
    setLoding(true);
    const response = await Register(username, email, password);
    setUser(response.user);
    setLoding(false);
  };

  return {
    user,
    loding,
    handleLogin,
    handleRegister,
  };
};
