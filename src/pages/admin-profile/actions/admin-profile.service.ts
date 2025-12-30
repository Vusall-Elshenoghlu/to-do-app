
// Mock service
import {mockProfile} from "../model/admin-profile.model";
import {IProfile} from "../admin-profile";
import {useMutation, useQueryClient} from "react-query";

export const fetchProfile = async (): Promise<IProfile> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockProfile), 500);
    });
};


// actions/admin-profile.query.ts

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async (updatedProfile: IProfile) => {
            return new Promise<IProfile>(resolve => {
                setTimeout(() => resolve(updatedProfile), 500);
            });
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['profile'], data);
            },
        }
    );
};


// Real API nümunəsi (comment):
/*
import axios from 'axios';

export const fetchProfile = async (): Promise<IProfile> => {
  const { data } = await axios.get('/api/profile');
  return data;
};

export const updateProfile = async (profile: IProfile): Promise<IProfile> => {
  const { data } = await axios.put('/api/profile', profile);
  return data;
};
*/
