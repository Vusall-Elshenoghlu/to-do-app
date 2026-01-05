// import { IProject } from '../../../core/layouts/public/components/left-menu/left-menu';
// import { getProjects } from './home.service';
// import {useQuery} from "react-query";
//
// export const PROJECTS_QUERY_KEY = ['projects'];
//
// export const useProjectsQuery = () => {
//     const {
//         data,
//         isLoading,
//         isError,
//         error,
//         refetch,
//     } = useQuery<IProject[], Error>({
//         queryKey: PROJECTS_QUERY_KEY,
//         queryFn: getProjects,
//         staleTime: 5 * 60 * 1000, // 5 dəqiqə cache fresh qalır
//         retry: 1,
//     });
//
//     return {
//         projects: data ?? [],
//         loading: isLoading,
//         error: isError ? error.message || 'Proyektləri yükləyərkən xəta baş verdi' : null,
//         refetch,
//     };
// };
