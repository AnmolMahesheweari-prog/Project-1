import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/post",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("/feed");
  return response.data;
}

export async function createPost(imgFile, caption) {
  const formData = new FormData();
  formData.append("imgUrl", imgFile);
  formData.append("caption", caption);

  const response = await api.post("/", formData);
  return response.data;
}
