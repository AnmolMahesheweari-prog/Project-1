import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function Login(username, password) {
  const res = await api.post("/login", {
    username,
    password,
  });

  return res.data;
}

export async function Register(username, email, password) {
  const res = await api.post("/register", {
    username,
    email,
    password,
  });

  return res.data;
}
