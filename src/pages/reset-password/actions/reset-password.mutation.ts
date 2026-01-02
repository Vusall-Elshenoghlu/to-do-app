import { resetPasswordService } from "./reset-password.service";
import {useMutation} from "react-query";

export const useResetPassword = () => {
    return useMutation({
        mutationFn: resetPasswordService,
    });
};
