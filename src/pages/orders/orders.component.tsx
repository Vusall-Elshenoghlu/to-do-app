import React from "react";
import { createUseStyles } from "react-jss";



export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
}

export type OrderStatus = "Pending" | "Completed" | "Cancelled";

export interface IOrder {
    id: number;
    products: IProduct[];
    totalPrice: number;
    status: OrderStatus;
}


const useStyles = createUseStyles({
    container: {
        padding: 24,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },

    heading: {
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 20,
        color: "#1e293b",
    },

    table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0 10px",

        "& th": {
            backgroundColor: "#f1f5f9",
            color: "#334155",
            fontWeight: 600,
            padding: "12px 16px",
            textAlign: "left",
        },

        "& td": {
            backgroundColor: "#ffffff",
            padding: "12px 16px",
            borderRadius: 8,
            transition: "all 0.25s ease",

            "&:hover": {
                backgroundColor: "#f8fafc",
            },
        },
    },

    productsCell: {
        maxWidth: 260,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },


    statusPending: {
        color: "#f59e0b",
        fontWeight: 600,
    },

    statusCompleted: {
        color: "#22c55e",
        fontWeight: 600,
    },

    statusCancelled: {
        color: "#ef4444",
        fontWeight: 600,
    },

    actions: {
        display: "flex",
        gap: 10,

        "& button": {
            padding: "6px 14px",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease",
        },

        "& .edit": {
            backgroundColor: "#3b82f6",
            color: "#ffffff",

            "&:hover": {
                backgroundColor: "#2563eb",
            },
        },

        "& .delete": {
            backgroundColor: "#ef4444",
            color: "#ffffff",

            "&:hover": {
                backgroundColor: "#dc2626",
            },
        },
    },
});


const mockProducts: IProduct[] = [
    { id: 1, name: "Espresso", description: "Strong espresso", price: 3, category: "Coffee", inStock: true },
    { id: 2, name: "Cappuccino", description: "With milk foam", price: 4, category: "Coffee", inStock: true },
    { id: 3, name: "Latte", description: "Smooth latte", price: 4.5, category: "Coffee", inStock: true },
    { id: 4, name: "Green Tea", description: "Fresh tea", price: 2.5, category: "Tea", inStock: true },
    { id: 5, name: "Cheesecake", description: "Classic cake", price: 6, category: "Dessert", inStock: true },
];

const mockOrders: IOrder[] = [
    { id: 101, products: [mockProducts[0], mockProducts[3]], totalPrice: 5.5, status: "Pending" },
    { id: 102, products: [mockProducts[1], mockProducts[4]], totalPrice: 10, status: "Completed" },
    { id: 103, products: [mockProducts[2]], totalPrice: 4.5, status: "Pending" },
    { id: 104, products: [mockProducts[0]], totalPrice: 3, status: "Cancelled" },
];

/* =======================
   Component
======================= */

const OrdersComponent: React.FC = () => {
    const classes = useStyles();

    const statusClassMap: Record<OrderStatus, string> = {
        Pending: classes.statusPending,
        Completed: classes.statusCompleted,
        Cancelled: classes.statusCancelled,
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>Orders</h2>

            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Products</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {mockOrders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>

                        <td className={classes.productsCell}>
                            {order.products.map((p) => p.name).join(", ")}
                        </td>

                        <td>${order.totalPrice.toFixed(2)}</td>

                        <td className={statusClassMap[order.status]}>
                            {order.status}
                        </td>

                        <td className={classes.actions}>
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersComponent;
