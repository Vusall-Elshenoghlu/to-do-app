import {useMutation} from 'react-query';
import {login} from './login.service';
import {store} from 'store/store.config';
import {setUser} from 'store/store.reducer';
import {setTokens} from 'core/helpers/get-token';
import {useNavigate} from 'react-router-dom';
import {Routes} from 'router/routes';
import {ILoginFormValues} from '../login';
import jwtDecode from "jwt-decode";

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ILoginFormValues) => {
            return login(credentials);
        },
        onSuccess: (data) => {
            console.log("LOGIN DATA:", data);

            setTokens(data.token, data.refreshToken);

            const user = jwtDecode(data.token);
            store.dispatch(setUser(user));

            navigate(Routes.home);
        },
    });
};
