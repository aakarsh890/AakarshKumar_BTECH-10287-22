import API from "./index";

export const updateUser = async (data) => {
  const res = await API.put("/user/update", data);
  return res.data;
};

export const deleteUser = async () => {
  const res = await API.delete("/user/delete");
  return res.data;
};
