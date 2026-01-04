import { useEffect, useState } from 'react';
import { ISidebarProject } from "../../../core/layouts/public/components/left-menu/left-menu";
import { getProjects } from "./home.service";

export const useProjectsQuery = () => {
    const [data, setData] = useState<ISidebarProject[]>([]);
    const [loading, setLoading] = useState(true); // true olaraq başla
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getProjects();
            console.log('Query response:', response);
            // Backend response: { data: [...], isSuccess: true }
            setData(response || []);
        } catch (err) {
            console.error('Query error:', err);
            setError('Proyektləri yükləyərkən xəta baş verdi');
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return {
        projects: data,
        loading,
        error,
        refetch: fetchProjects,
    };
};