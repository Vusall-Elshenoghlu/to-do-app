import {useMutation} from "react-query";
import {forgotPasswordService} from "./forgot-password.service";


export const useForgotPasswordMutation = () => {
    return useMutation({
        mutationFn: forgotPasswordService,
    });
};