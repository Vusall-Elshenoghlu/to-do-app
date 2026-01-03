import { useMutation } from 'react-query';
import { resetPassword } from './reset-password.service';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Routes } from 'router/routes';
import { IResetPasswordFormValues } from '../reset-password';

export const useResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    return useMutation({
        mutationFn: (values: IResetPasswordFormValues) => {
            const token = searchParams.get('token');
            const email = searchParams.get('email');

            if (!token || !email) throw new Error('Token or email missing from URL');

            const payload = {
                email,
                token,
                newPassword: values.password,
                confirmPassword: values.confirmPassword,
            };

            return resetPassword(payload);
        },
        onSuccess: (response) => {
            alert('Password reset successful! You can now log in.');
            navigate(Routes.login);
        },
        onError: (error: any) => {
            // təhlükəsiz error handling
            let message = 'Something went wrong';
            if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message;
            } else if (error.message) {
                message = error.message;
            }
        },
    });
};
