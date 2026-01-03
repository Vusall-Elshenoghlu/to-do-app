export interface IResetPasswordFormValues {
    password: string;
    confirmPassword: string;
}

export interface IResetPasswordRequest {
    email: string;
    token: string;
    newPassword: string;
    confirmPassword: string;
}
