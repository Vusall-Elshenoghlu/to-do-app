import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as service from './todo.service';

export const TODOS_KEY = (projectId: string) => ['todos', projectId];

export const useTodosQuery = (projectId?: string) =>
    useQuery(TODOS_KEY(projectId!), () => service.getTodos(projectId!), { enabled: !!projectId });

export const useCreateTodo = (projectId: string) => {
    const qc = useQueryClient();
    return useMutation(service.createTodo, {
        onSuccess: () => qc.invalidateQueries(TODOS_KEY(projectId)),
    });
};

export const useUpdateTodo = (projectId: string) => {
    const qc = useQueryClient();
    return useMutation(
        ({ id, payload }: any) => service.updateTodo({ id, payload }),
        { onSuccess: () => qc.invalidateQueries(TODOS_KEY(projectId)) }
    );
};

export const useDeleteTodo = (projectId: string) => {
    const qc = useQueryClient();
    return useMutation(service.deleteTodo, {
        onSuccess: () => qc.invalidateQueries(TODOS_KEY(projectId)),
    });
};
