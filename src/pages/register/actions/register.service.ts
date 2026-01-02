import {IRegisterFormValues} from "../register";
import axiosInstance from "../../../core/configs/axios.config";
import {API} from "../../../core/configs/api.config";

export const registerService = async (payload: IRegisterFormValues) => {
    const {
        email,
        password,
        address,
        firstName,
        lastName
    } = payload;

    const body = {
        email,
        password,
        address,
        firstName,
        lastName,
    };

    const response = await axiosInstance.post(API.register, body);
    console.log(response);
    console.log(response.data);
    return response.data;
};