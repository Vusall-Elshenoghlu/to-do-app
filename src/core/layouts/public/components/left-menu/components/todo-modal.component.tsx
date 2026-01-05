import { Modal, Form, Input, Select, DatePicker, Button } from 'antd';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import {ITodo} from "../left-menu";

interface Props {
    open: boolean;
    onClose: () => void;
    projectId: string;
    editTodo?: ITodo | null;
    onSubmit?: (values: any) => void;
}

const priorityOptions = [
    { label: 'Low', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'High', value: 3 },
];

const statusOptions = [
    { label: 'Pending', value: 1 },
    { label: 'InProgress', value: 2 },
    { label: 'Done', value: 3 },
];

const TodoModal = ({ open, onClose, projectId, editTodo, onSubmit }: Props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (editTodo) {
            form.setFieldsValue({
                ...editTodo,
                deadline: editTodo.deadline ? dayjs(editTodo.deadline) : undefined,
            });
        } else {
            form.resetFields();
        }
    }, [editTodo, form]);

    const handleFinish = (values: any) => {
        onSubmit?.(values);
        form.resetFields();
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            title={editTodo ? 'Tapşırığı Redaktə Et' : 'Yeni Tapşırıq'}
        >
            <Form form={form} layout="vertical" onFinish={handleFinish}>
                <Form.Item
                    name="title"
                    label="Başlıq"
                    rules={[{ required: true, message: 'Başlıq daxil edin' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="note" label="Qeyd">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item name="priority" label="Prioritet" rules={[{ required: true }]}>
                    <Select options={priorityOptions} />
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                    <Select options={statusOptions} />
                </Form.Item>

                <Form.Item name="deadline" label="Deadline">
                    <DatePicker showTime style={{ width: '100%' }} />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    {editTodo ? 'Yenilə' : 'Yarat'}
                </Button>
            </Form>
        </Modal>
    );
};

export default TodoModal;
