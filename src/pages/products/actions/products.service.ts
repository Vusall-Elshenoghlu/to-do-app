// import axios from 'axios';
// import {IProduct} from "../products";
//
// const API_URL = 'https://your-backend-api.com/api/products';
//
// export const fetchProducts = async (): Promise<IProduct[]> => {
//     const res = await axios.get(API_URL);
//     return res.data;
// };
//
// export const addProduct = async (product: IProduct) => {
//     await axios.post(API_URL, product);
// };
//
// export const updateProduct = async (id: number, product: IProduct) => {
//     await axios.put(`${API_URL}/${id}`, product);
// };
//
// export const deleteProduct = async (id: number) => {
//     await axios.delete(`${API_URL}/${id}`);
// };

import { IProduct } from "../products";
import {mockProducts} from "../products.mock";

const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<IProduct[]> => {
    await delay(500);
    return [...mockProducts];
};

export const addProduct = async (product: IProduct) => {
    await delay(300);
    mockProducts.push({
        ...product,
        id: Date.now(), // fake id
    });
};

export const updateProduct = async (id: number, product: IProduct) => {
    await delay(300);
    const index = mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
        mockProducts[index] = { ...product, id };
    }
};

export const deleteProduct = async (id: number) => {
    await delay(300);
    const index = mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
        mockProducts.splice(index, 1);
    }
};
