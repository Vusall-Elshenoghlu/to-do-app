import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as service from '../actions/project.service';

export const PROJECTS_KEY = ['projects'];

export const useProjectsQuery = () =>
    useQuery(PROJECTS_KEY, service.getProjects);

export const useCreateProject = () => {
    const qc = useQueryClient();
    return useMutation(service.createProject, {
        onSuccess: () => qc.invalidateQueries(PROJECTS_KEY),
    });
};

export const useUpdateProject = () => {
    const qc = useQueryClient();
    return useMutation(
        (payload: { id: string; name: string; colorHex: string }) =>
            service.updateProject(payload),
        {
            onSuccess: () => qc.invalidateQueries(PROJECTS_KEY),
        }
    );
};

export const useDeleteProject = () => {
    const qc = useQueryClient();
    return useMutation(service.deleteProject, {
        onSuccess: () => qc.invalidateQueries(PROJECTS_KEY),
    });
};
