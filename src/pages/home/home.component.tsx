
import type React from "react";
import { motion } from "framer-motion";
import { Tag, Empty, Button } from "antd";
import { UserOutlined, CoffeeOutlined, CheckCircleOutlined, CalendarOutlined, PlusOutlined } from "@ant-design/icons";
import { useHomeStyles } from "./home.style";

// Added a Todo list section with empty state handling as requested.

interface ITodo {
    id: number
    task: string
    priority: "high" | "medium" | "low"
    dueDate: string
}

const mockTodos: ITodo[] = [
    { id: 1, task: "Review new user registrations", priority: "high", dueDate: "Today" },
    { id: 2, task: "Update coffee menu prices", priority: "medium", dueDate: "Tomorrow" },
];

const HomeComponent: React.FC = () => {
    const classes = useHomeStyles();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    const stats = [
        { title: "Total Users", value: "1,284", icon: <UserOutlined />, color: "#4A90E2" },
        { title: "Active Orders", value: "42", icon: <CoffeeOutlined />, color: "#6C63FF" },
        { title: "Completed", value: "892", icon: <CheckCircleOutlined />, color: "#00B894" },
    ];

    return (
        <motion.div className={classes.page} initial="hidden" animate="visible" variants={containerVariants}>
            <div className={classes.container}>
                <motion.div className={classes.header} variants={itemVariants}>
                    <h1>Welcome Back, Admin</h1>
                    <p>Here's what's happening with your business today.</p>
                </motion.div>

                <div className={classes.statsGrid}>
                    {stats.map((stat, idx) => (
                        <motion.div key={idx} className={classes.statCard} variants={itemVariants}>
                            <div className={classes.iconWrapper} style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
                                {stat.icon}
                            </div>
                            <div className={classes.statInfo}>
                                <h3>{stat.value}</h3>
                                <p>{stat.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={classes.contentGrid}>
                    <motion.div className={classes.sectionCard} variants={itemVariants}>
                        <h2>
                            <CheckCircleOutlined style={{ color: "#4A90E2" }} /> Todo List
                        </h2>
                        {mockTodos.length > 0 ? (
                            <div>
                                {mockTodos.map((todo) => (
                                    <div key={todo.id} className={classes.todoItem}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600 }}>{todo.task}</div>
                                            <div style={{ fontSize: "0.8rem", color: "#7f8c8d" }}>
                                                <CalendarOutlined /> {todo.dueDate}
                                            </div>
                                        </div>
                                        <Tag color={todo.priority === "high" ? "red" : "blue"} className={classes.todoTag}>
                                            {todo.priority}
                                        </Tag>
                                    </div>
                                ))}
                                <Button type="dashed" block icon={<PlusOutlined />} style={{ marginTop: 12, height: 45 }}>
                                    Add New Task
                                </Button>
                            </div>
                        ) : (
                            <div className={classes.emptyState}>
                                <Empty description="Your todo list is already empty!" />
                            </div>
                        )}
                    </motion.div>

                    <motion.div className={classes.sectionCard} variants={itemVariants}>
                        <h2>
                            <CoffeeOutlined style={{ color: "#6C63FF" }} /> Recent Activity
                        </h2>
                        <div className={classes.emptyState}>
                            <p>No recent activity to show.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

// Explicit default export to resolve import errors in app/page.tsx
export default HomeComponent;
