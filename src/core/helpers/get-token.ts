import { environment } from "../configs/app.config";

const ACCESS = `${environment.applicationName}-access`;
const REFRESH = `${environment.applicationName}-refresh`;

export const setTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(ACCESS, accessToken);
    localStorage.setItem(REFRESH, refreshToken);
};

export const getAccessToken = () => localStorage.getItem(ACCESS);
export const getRefreshToken = () => localStorage.getItem(REFRESH);

export const clearTokens = () => {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
};
