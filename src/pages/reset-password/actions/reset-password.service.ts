import axios from "axios";
import type { IResetPasswordFormValues } from "../reset-password";

export const resetPasswordService = (data: IResetPasswordFormValues) => {
    return axios.post("/auth/reset-password", data);
};
