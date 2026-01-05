import { useState } from 'react';
import { List, Button, Empty, Popconfirm, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useCreateTodo, useUpdateTodo, useDeleteTodo } from '../actions/todo.query';
import {ITodo} from "../left-menu";
import {useTodoListStyles} from "./todo-list.style";
import TodoModal from "./todo-modal.component";
const { Text } = Typography;
interface Props {
    projectId: string;
    todos: ITodo[];
}

const TodoList = ({ projectId, todos }: Props) => {
    const classes = useTodoListStyles();
    const [openModal, setOpenModal] = useState(false);
    const [editTodo, setEditTodo] = useState<ITodo | null>(null);

    const createTodo = useCreateTodo(projectId);
    const updateTodo = useUpdateTodo(projectId);
    const deleteTodo = useDeleteTodo(projectId);

    const handleSubmit = (values: any) => {
        if (editTodo) {
            updateTodo.mutate({ id: editTodo.id, payload: { ...values, projectId } });
        } else {
            createTodo.mutate({ ...values, projectId });
        }
        setOpenModal(false);
        setEditTodo(null);
    };

    return (
        <div className={classes.todoContainer}>
            {/* Header with Add Button */}
            <div className={classes.header}>
                <h2>Todo List</h2>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setOpenModal(true)}
                >
                    Yeni Tapşırıq
                </Button>
            </div>

            {/* Empty State */}
            {todos.length === 0 ? (
                <div className={classes.emptyContainer}>
                    <Empty description="Hələ tapşırıq yoxdur" />
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setOpenModal(true)}
                    >
                        Tapşırıq əlavə et
                    </Button>
                </div>
            ) : (
                <List
                    dataSource={todos}
                    split={false}
                    renderItem={(todo) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className={classes.listItem}>
                                <div className={classes.meta}>
                                    <Text strong>{todo.title}</Text>
                                    <Text type="secondary">{todo.note}</Text>
                                    <Text type="secondary">
                                        Prioritet: {todo.priority} | Status: {todo.status}
                                    </Text>
                                    {todo.deadline && (
                                        <Text type="secondary">
                                            Deadline: {new Date(todo.deadline).toLocaleString()}
                                        </Text>
                                    )}
                                </div>

                                <div className={classes.actions}>
                                    <Button
                                        type="text"
                                        icon={<EditOutlined />}
                                        onClick={() => { setEditTodo(todo); setOpenModal(true); }}
                                    />
                                    <Popconfirm
                                        title="Silinsin?"
                                        onConfirm={() => deleteTodo.mutate(todo.id)}
                                    >
                                        <Button type="text" icon={<DeleteOutlined />} />
                                    </Popconfirm>
                                </div>
                            </div>
                        </motion.div>
                    )}
                />
            )}

            {/* Modal */}
            <TodoModal
                open={openModal}
                onClose={() => { setOpenModal(false); setEditTodo(null); }}
                projectId={projectId}
                editTodo={editTodo}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default TodoList;
