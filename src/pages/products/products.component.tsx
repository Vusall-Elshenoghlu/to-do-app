import React, { useState, useEffect } from 'react';
import {IProduct} from "./products";
import useProductsStyle from "./products.style";
import {addProduct, deleteProduct, fetchProducts, updateProduct} from "./actions/products.service";

const ProductsComponent: React.FC = () => {
    const classes = useProductsStyle();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
    interface ProductForm {
        name: string;
        description: string;
        photoUrl: string;
        price: number;
        category: string;
        inStock: boolean;
    }

    const [form, setForm] = useState<Partial<IProduct>>({
        name: '',
        description: '',
        photoUrl: '',
        price: 0,
        category: '',
        inStock: true,
    });



    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type } = e.target;

        const value =
            type === 'checkbox'
                ? e.target.checked
                : type === 'number'
                    ? Number(e.target.value)
                    : e.target.value;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            await updateProduct(editingProduct.id, form as IProduct);
            setEditingProduct(null);
        } else {
            await addProduct(form as IProduct);
        }
        setForm({ name: '', description: '', photoUrl: '', price: 0, category: '', inStock: true });
        loadProducts();
    };

    const handleEdit = (product: IProduct) => {
        setEditingProduct(product);
        setForm(product);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Silmek istediyinizə əminsiniz?')) {
            await deleteProduct(id);
            loadProducts();
        }
    };

    if (loading) return <div className={classes.container}>Yüklənir...</div>;

    return (
        <div className={classes.container}>
            <h2>Products</h2>

            <form className={classes.form} onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    name="photoUrl"
                    placeholder="Photo URL"
                    value={form.photoUrl}
                    onChange={handleChange}
                />
                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    required
                />
                <input
                    name="category"
                    placeholder="Category"
                    value={form.category}
                    onChange={handleChange}
                    required
                />
                <label>
                    In Stock:
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={form.inStock}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
            </form>

            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>In Stock</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((p) => (
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.category}</td>
                        <td>{p.inStock ? 'Yes' : 'No'}</td>
                        <td>
                            <button className={`${classes.button} edit`} onClick={() => handleEdit(p)}>Edit</button>
                            <button className={`${classes.button} delete`} onClick={() => handleDelete(p.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsComponent;
