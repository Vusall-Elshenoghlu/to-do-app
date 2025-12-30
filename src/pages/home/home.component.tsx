import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICounts, IUser } from '../users/users';
import { mockCoffees, mockUsers } from './actions/home.service';
import {
    UserSwitchOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { useAdminDashboardStyles } from './home.style';
import useLocalization from '../../assets/lang';

const HomeComponent: React.FC = () => {
    const classes = useAdminDashboardStyles();
    const navigate = useNavigate();
    const translate = useLocalization();

    const [counts, setCounts] = useState<ICounts>({
        users: 12,
        coffes: 20,
        desserts: 25,
        teas: 12
    });

    const [recentUsers, setRecentUsers] = useState<IUser[]>([]);
    const [recentCoffees, setRecentCoffees] = useState<any[]>([]); // coffee tipi uyğunlaşdır

    useEffect(() => {
        const sortByDobDesc = (users: IUser[]) =>
            users
                .slice()
                .sort((a, b) => {
                    const aTime = a.dob ? new Date (a.dob).getTime() : 0;
                    const bTime = b.dob ? new Date(b.dob).getTime() : 0;
                    return bTime - aTime;
                });

        setRecentUsers(sortByDobDesc(mockUsers).slice(0, 5));

        // Recent Coffees (məsələn, əlavə olunma tarixinə görə sort edə bilərsən)
        setRecentCoffees(mockCoffees.slice(0, 5));
    }, []);

    const cards = [
        { title: translate('dashboard_users'), key: 'users', icon: <UserSwitchOutlined style={{ fontSize: 50 }} />, path: 'users' },
        { title: translate("dashboard_coffees"), key: 'coffes', icon: <ShopOutlined style={{ fontSize: 50 }} />, path: 'coffes' },
        { title: translate('dashboard_desserts'), key: 'desserts', icon: <ShopOutlined style={{ fontSize: 50 }} />, path: 'users' },
        { title: translate("dashboard_teas"), key: 'teas', icon: <ShopOutlined style={{ fontSize: 50 }} />, path: 'coffes' },

    ];

    const formatDate = (dateStr?: string) =>
        dateStr ? new Date(dateStr).toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' }) : '-';



    return (
        <div className={classes.root}>
            <h2 className={classes.header}>İdarə Paneli</h2>

            <div className={classes.cardContainer}>
                {cards.map((item) => (
                    <div key={item.key} className={classes.card} onClick={() => navigate(item.path)}>
                        {item.icon}
                        <div>
                            <p className={classes.cardCount}>{counts[item.key as keyof ICounts]}</p>
                            <p className={classes.cardTitle}>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div className={classes.tableCard}>
                    <h4>{translate('dashboard_last_five_users')}</h4>
                    <table className={classes.table}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{translate('dashboard_name_surname')}</th>
                            <th>{translate('dashboard_birthday')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentUsers.map((u, idx) => (
                            <tr key={u.id}>
                                <td>{idx + 1}</td>
                                <td>{u.firstName} {u.lastName}</td>
                                <td>{formatDate(u.dob)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className={classes.tableCard}>
                    <h4>{translate('dashboard_last_five_coffees')}</h4>
                    <table className={classes.table}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{translate('dashboard_name')}</th>
                            <th>{translate('dashboard_price')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentCoffees.map((c, idx) => (
                            <tr key={c.id}>
                                <td>{idx + 1}</td>
                                <td>{c.name}</td>
                                <td>{c.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
