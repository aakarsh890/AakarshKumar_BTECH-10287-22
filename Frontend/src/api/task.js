import API from "./index";

export const getTasks = async (status) => {
  const url = status ? `/task?status=${status}` : "/task";
  const res = await API.get(url);
  return res.data;
};

export const createTask = async (data) => {
  const res = await API.post("/task", data);
  return res.data;
};

export const updateTaskStatus = async (id, status) => {
  const res = await API.put(`/task/${id}/status`, { status });
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/task/${id}`);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await API.put(`/task/${id}`, data);
  return res.data;
};

