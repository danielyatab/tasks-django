import axios from "axios";


const apiTasks = axios.create({ baseURL: "http://localhost:8000/tasks", timeout: 5000 })

export const getAllTasks = () => apiTasks.get("/")
export const getTask = (id) => apiTasks.get(`/${id}/`)
export const postTask = (task) => apiTasks.post('/', task)
export const deleteTask = (id) => apiTasks.delete(`/${id}/`)
export const putTask = (id, newTask) => apiTasks.put(`/${id}/`, newTask)
