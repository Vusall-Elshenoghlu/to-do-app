import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { IResetPasswordRequest } from '../reset-password';

export const resetPassword = (data: IResetPasswordRequest) => {
    return axiosInstance.post(API.reset_password, data).then(res => res.data);
};
