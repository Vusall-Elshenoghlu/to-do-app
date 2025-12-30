
export interface ICoffee {
    id: number;
    name: string;
    description?: string;
    photoUrl?: string;
    price: number;
    category: MenuCategory;
    inStock: boolean;
}