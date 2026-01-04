import { API } from 'core/configs/api.config';
import axiosInstance from "../../../core/configs/axios.config";
import { ISidebarProject } from "../../../core/layouts/public/components/left-menu/left-menu";

interface IApiResponse<T> {
    data: T;
    isSuccess: boolean;
    statusCode: number;
    errors: null | string[];
}

export const getProjects = async (): Promise<ISidebarProject[]> => {
    const res = await axiosInstance.get<IApiResponse<ISidebarProject[]>>(API.projects);
    console.log('Full response:', res);
    console.log('Response data:', res.data);
    console.log('Projects array:', res.data.data);
    return res.data.data; // Backend cavabı: { data: [...] }
};