import {useMutation} from "react-query";
import {IRegisterFormValues} from "../register";
import {registerService} from "./register.service";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../router/routes";

export const useRegister = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: IRegisterFormValues) => registerService(data),
        onSuccess: (_data, variables) => {
            message.success("Register Successful! Check your email address.");
            navigate(Routes.verify_otp, {
                state: {
                    email: variables.email,
                },
            });
        },
        onError: (error: any) => {
            message.error(error?.message || "Registration failed!");
        }
    });
};