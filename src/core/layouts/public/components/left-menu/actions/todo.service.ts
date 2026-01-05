import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import {ITodo, ITodoPayload, ITodoUpdatePayload} from "../left-menu";


// Get todos for project
export const getTodos = async (projectId: string): Promise<ITodo[]> => {
    const res = await axiosInstance.get<{ data: ITodo[] }>(`${API.todos}?projectId=${projectId}`);
    return res.data.data;
};

// Create
export const createTodo = async (payload: ITodoPayload) => {
    return axiosInstance.post(API.todos, payload);
};

// Update
export const updateTodo = async ({ id, payload }: { id: string; payload: ITodoUpdatePayload }) => {
    return axiosInstance.put(`${API.todos}/${id}`, payload);
};

// Delete
export const deleteTodo = async (id: string) => {
    return axiosInstance.delete(`${API.todos}/${id}`);
};
