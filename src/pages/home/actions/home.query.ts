// import {useEffect, useState} from 'react';
// import {HomeService} from './home.service';
// import {IDashboardStatistics} from '../model/home.model';
//
// export const useHomeStatistics = () => {
//     const [data, setData] = useState<IDashboardStatistics | null>(null);
//     const [loading, setLoading] = useState(false);
//     const [range, setRange] = useState<{from?: string; to?: string}>({});
//
//     const fetchStats = async () => {
//         setLoading(true);
//         const res = await HomeService.getStatistics(range);
//         setData(res.data);
//         setLoading(false);
//     };
//
//     useEffect(() => {
//         fetchStats();
//     }, [range]);
//
//     return {
//         data,
//         loading,
//         setRange,
//     };
// }

import {useEffect, useState} from 'react';
import {HomeService} from './home.service';
import {IDashboardStatistics} from '../model/home.model';

export const useHomeStatistics = () => {
    const [data, setData] = useState<IDashboardStatistics | null>(null);
    const [loading, setLoading] = useState(false);
    const [range, setRange] = useState<{ from?: string; to?: string }>({});

    const fetchStats = async () => {
        try {
            setLoading(true);
            const res = await HomeService.getStatistics(range);
            setData(res.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, [range]);

    return {
        data,
        loading,
        setRange,
    };
};

