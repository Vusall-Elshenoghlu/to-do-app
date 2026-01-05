// export interface ISidebarProject {
//     id: string;
//     name: string;
//     colorHex: string;
//     toDoItemsCount?: number;
// }
export interface IProject {
    id: string;
    name: string;
    colorHex: string;
    toDoItemsCount: number;
    createdDate: string;
}

export enum TodoPriority {
    Low = 1,
    Medium = 2,
    High = 3,
}

export enum TodoStatus {
    Todo = 1,
    InProgress = 2,
    Done = 3,
}

import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';

export interface ITodoPayload {
    title: string;
    note?: string;
    priority: number;
    status: number;
    deadline?: string;
    projectId: string;
}

export interface ITodoUpdatePayload {
    id: string;
    title: string;
    note?: string;
    priority: number;
    status: number;
    deadline?: string;
}

export interface ITodo {
    id: string;
    title: string;
    note?: string;
    priority: number;
    status: number;
    deadline?: string;
    projectId: string;
    projectName?: string;
}

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

