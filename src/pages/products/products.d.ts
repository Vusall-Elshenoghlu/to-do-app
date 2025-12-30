// home.d.ts
export interface IProduct {
    id: number;
    name: string;
    description?: string;
    photoUrl?: string;
    price: number;
    category: string; // MenuCategory-ı string kimi götürə bilərik
    inStock: boolean;
}

export interface IHomeState {
    products: IProduct[];
    loading: boolean;
    error?: string;
}
