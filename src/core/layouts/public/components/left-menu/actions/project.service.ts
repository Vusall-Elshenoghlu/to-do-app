import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import {IProject} from "../left-menu";

interface ApiResponse<T> {
    data: T;
    isSuccess: boolean;
}

export const getProjects = async (): Promise<IProject[]> => {
    const res = await axiosInstance.get<ApiResponse<IProject[]>>(API.projects);
    return res.data.data;
};

export const createProject = (payload: {
    name: string;
    colorHex: string;
}) =>
    axiosInstance.post(API.projects, payload);

export const updateProject = (
    payload: { id: string; name: string; colorHex: string }
) =>
    axiosInstance.put(API.projects, payload);


export const deleteProject = (id: string) =>
    axiosInstance.delete(`${API.projects}/${id}`);
