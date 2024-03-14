import axios from "axios";


const isDevelopment = import.meta.env.MODE === 'development'
const baseURL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD

const apiTasks = axios.create({
    baseURL, timeout: 5000
})

export const getAllTasks = () => apiTasks.get("tasks/")
export const getTask = (id) => apiTasks.get(`tasks/${id}/`)
export const postTask = (task) => apiTasks.post('tasks/', task)
export const deleteTask = (id) => apiTasks.delete(`tasks/${id}/`)
export const putTask = (id, newTask) => apiTasks.put(`tasks/${id}/`, newTask)
