import {IOtpFormValues} from '../otp';
import axiosInstance from '../../../core/configs/axios.config';
import {API} from '../../../core/configs/api.config';

export const verifyOtpService = async (payload: IOtpFormValues) => {
    const response = await axiosInstance.post(API.verify_email, payload);
    console.log('response', response);
    return response.data;
};
