import {IUser} from "../../users/users";
import {ICoffee} from "../home";
import {IDashboardStatistics} from '../model/home.model';
import {API} from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

// export const HomeService = {
//     getStatistics: (params?: { from?: string; to?: string }) =>
//         axiosInstance.get<IDashboardStatistics>(API.statistics, { params }),
// };
//
export enum MenuCategory {
    Hot = "Hot",
    Cold = "Cold",
    Dessert = "Dessert",
    Snack = "Snack",
}

export const HomeService = {
    getStatistics: async (_params?: { from?: string; to?: string }) => {
        // fake delay (real API kimi hiss edilsin)
        await new Promise((r) => setTimeout(r, 600));

        const mockData: IDashboardStatistics = {
            orders: {
                total: 1240,
                paid: 980,
                pending: 180,
                cancelled: 80,
                today: 42,
            },
            payments: {
                success: 960,
                failed: 120,
                todayCount: 38,
            },
            methods: {
                cash: 540,
                card: 540,
            },
            revenue: {
                total: 18650,
                today: 720,
            },
        };

        return {
            data: mockData,
        };
    },
};



export const mockUsers: IUser[] = [
    { id: 1, firstName: "Elvin", lastName: "Hüseynov", dob: "1980-01-12" },
    { id: 2, firstName: "Leyla", lastName: "Əliyeva", dob: "1985-05-30" },
    { id: 3, firstName: "Kamran", lastName: "Məmmədov", dob: "1990-09-20" },
    { id: 4, firstName: "Aysel", lastName: "Quliyeva", dob: "1992-11-15" },
    { id: 5, firstName: "Rəşad", lastName: "Hüseynli", dob: "1988-07-05" },
    { id: 6, firstName: "Nigar", lastName: "Sadiqova", dob: "1987-12-10" },
];


export const mockCoffees: ICoffee[] = [
    {
        id: 1,
        name: "Espresso",
        description: "Güclü və klassik espresso qəhvəsi",
        photoUrl: "/images/menu/espresso.jpg",
        price: 2.5,
        category: MenuCategory.Hot,
        inStock: true,
    },
    {
        id: 2,
        name: "Cappuccino",
        description: "Süd köpüyü ilə hazırlanmış yumşaq qəhvə",
        photoUrl: "/images/menu/cappuccino.jpg",
        price: 3.5,
        category: MenuCategory.Hot,
        inStock: true,
    },
    {
        id: 3,
        name: "Latte",
        description: "Bol südlü, yüngül dadlı latte",
        photoUrl: "/images/menu/latte.jpg",
        price: 4,
        category: MenuCategory.Hot,
        inStock: true,
    },
    {
        id: 4,
        name: "Iced Coffee",
        description: "Soyuq qəhvə, yay üçün ideal seçim",
        photoUrl: "/images/menu/iced-coffee.jpg",
        price: 4.2,
        category: MenuCategory.Cold,
        inStock: true,
    },
    {
        id: 5,
        name: "Mocha",
        description: "Şokoladlı qəhvə sevənlər üçün",
        photoUrl: "/images/menu/mocha.jpg",
        price: 4.5,
        category: MenuCategory.Hot,
        inStock: false,
    },
    {
        id: 6,
        name: "Cheesecake",
        description: "Klassik New York cheesecake",
        photoUrl: "/images/menu/cheesecake.jpg",
        price: 5,
        category: MenuCategory.Dessert,
        inStock: true,
    },
    {
        id: 7,
        name: "Brownie",
        description: "Şokoladlı, yumşaq desert",
        photoUrl: "/images/menu/brownie.jpg",
        price: 3.8,
        category: MenuCategory.Dessert,
        inStock: true,
    },
    {
        id: 8,
        name: "Croissant",
        description: "Kərə yağlı fransız kruvasanı",
        photoUrl: "/images/menu/croissant.jpg",
        price: 2.8,
        category: MenuCategory.Snack,
        inStock: true,
    },
];
