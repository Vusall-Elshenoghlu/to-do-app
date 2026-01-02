import axios from 'axios';
import {IForgotPasswordFormValues} from '../forgot-password';
import axiosInstance from "../../../core/configs/axios.config";
import {API} from "../../../core/configs/api.config";

export const forgotPasswordService = async (payload: IForgotPasswordFormValues) => {
    const {email} = payload;
    const body = {email: email};
    const response = await axiosInstance.post( API.forgot_password, body);
    console.log(response);
    return response.data;
};
