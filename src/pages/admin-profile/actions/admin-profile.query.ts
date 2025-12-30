import { useQuery, useMutation, useQueryClient } from 'react-query';
import {IProfile} from "../admin-profile";
import {fetchProfile} from "./admin-profile.service";

export const useProfile = () => {
    return useQuery<IProfile>(['profile'], fetchProfile); // funksiyanı pass et, çağırma!
};

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async (updatedProfile: IProfile) => {
            return { ...updatedProfile };
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['profile'], data);
            },
        }
    );
};
