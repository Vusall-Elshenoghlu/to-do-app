import { Modal, Form, Input, ColorPicker, Button } from 'antd';
import { useCreateProject, useUpdateProject } from '../actions/project.query';
import { useEffect } from 'react';
import {IProject} from "../left-menu";

interface Props {
    open: boolean;
    onClose: () => void;
    editProject?: IProject | null;
}

const CreateProjectModal = ({ open, onClose, editProject }: Props) => {
    const [form] = Form.useForm();
    const createProject = useCreateProject();
    const updateProject = useUpdateProject();

    useEffect(() => {
        if (editProject) {
            form.setFieldsValue({
                name: editProject.name,
                colorHex: editProject.colorHex,
            });
        } else {
            form.resetFields();
            form.setFieldsValue({ colorHex: '#1677ff' });
        }
    }, [editProject, form]);

    const submit = async () => {
        const values = await form.validateFields();

        if (editProject) {
            await updateProject.mutateAsync({
                id: editProject.id,
                name: values.name,
                colorHex: values.colorHex,
            });

        } else {
            await createProject.mutateAsync(values);
        }

        onClose();
        form.resetFields();
    };

    return (
        <Modal open={open} onCancel={onClose} footer={null} title={editProject ? "Proyekti Yenilə" : "Yeni Proyekt"}>
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Ad" rules={[{ required: true, message: 'Ad daxil edin' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="colorHex" label="Rəng">
                    <ColorPicker
                        onChange={(_, hex) => form.setFieldValue('colorHex', hex)}
                    />
                </Form.Item>

                <Button
                    type="primary"
                    block
                    loading={createProject.isLoading || updateProject.isLoading}
                    onClick={submit}
                >
                    {editProject ? "Yenilə" : "Yarat"}
                </Button>
            </Form>
        </Modal>
    );
};

export default CreateProjectModal;
