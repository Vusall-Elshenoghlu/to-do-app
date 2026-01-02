import { verifyOtpService } from './otp.service';
import {useMutation} from 'react-query';
import {IOtpFormValues} from '../otp';
import {message} from "antd";

export const useVerifyOtp = (onSuccessNavigate?: () => void) => {
    return useMutation({
        mutationFn: (data: IOtpFormValues) => verifyOtpService(data),
        onSuccess: () => {
            message.success("Email successfully verified");
            onSuccessNavigate?.();
        },
        onError: (error: any) => {
            message.error(error?.message || "OTP verification failed");
        },
    });
};

