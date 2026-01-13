import API from "./index";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
