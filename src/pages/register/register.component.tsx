import { Form, Input, Button, DatePicker, Select, message } from 'antd';
import { motion } from 'framer-motion';
import { useRegisterStyles } from './register.style';
import type { IRegisterFormValues } from './register.d';
import { useRegister} from './actions/register.mutation';
import {Routes} from '../../router/routes';

const { Option } = Select;

export default function RegisterComponent() {
    const classes = useRegisterStyles();
    const [form] = Form.useForm();

    const {mutate: register, isLoading} = useRegister();


    const handleSubmit = (values: IRegisterFormValues) => {
        register(values);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className={classes.container}>
            <motion.div className={classes.card} variants={containerVariants} initial='hidden' animate='visible'>
                <motion.div className={classes.header} variants={itemVariants}>
                    <h1 className={classes.title}>Create Account</h1>
                    <p className={classes.subtitle}>Join us to organize your tasks</p>
                </motion.div>

                <motion.div className={classes.socialButtons} variants={itemVariants}>
                    <button className={classes.socialButton} type='button'>
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
                            <path
                                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                                fill='#4285F4'
                            />
                            <path
                                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                                fill='#34A853'
                            />
                            <path
                                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                                fill='#FBBC05'
                            />
                            <path
                                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                                fill='#EA4335'
                            />
                        </svg>
                        Google
                    </button>
                    <button className={classes.socialButton} type='button'>
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
                        </svg>
                        GitHub
                    </button>
                </motion.div>

                <motion.div className={classes.divider} variants={itemVariants}>
                    <span>Or register with email</span>
                </motion.div>

                <Form form={form} className={classes.form} onFinish={handleSubmit} layout='vertical' requiredMark={false}>
                    <motion.div variants={itemVariants}>
                        <div className={classes.formRow}>
                            <Form.Item
                                name='firstName'
                                label='First Name'
                                className={classes.formItem}
                                rules={[{ required: true, message: 'Please enter your first name' }]}
                            >
                                <Input placeholder='John' />
                            </Form.Item>

                            <Form.Item
                                name='lastName'
                                label='Last Name'
                                className={classes.formItem}
                                rules={[{ required: true, message: 'Please enter your last name' }]}
                            >
                                <Input placeholder='Doe' />
                            </Form.Item>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Form.Item
                            name='email'
                            label='Email'
                            className={classes.formItem}
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input placeholder='john.doe@example.com' />
                        </Form.Item>
                    </motion.div>


                    <motion.div variants={itemVariants}>
                        <Form.Item
                            name='address'
                            label='Address'
                            className={classes.formItem}
                            rules={[{ required: true, message: 'Please enter your address' }]}
                        >
                            <Input placeholder='123 Main St, City, Country' />
                        </Form.Item>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className={classes.formRow}>
                            <Form.Item
                                name='password'
                                label='Password'
                                className={classes.formItem}
                                rules={[
                                    { required: true, message: 'Please enter your password' },
                                    { min: 8, message: 'Password must be at least 8 characters' },
                                ]}
                            >
                                <Input.Password placeholder='Enter your password' />
                            </Form.Item>

                            <Form.Item
                                name='confirmPassword'
                                label='Confirm Password'
                                className={classes.formItem}
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder='Confirm your password' />
                            </Form.Item>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Button type='primary' htmlType='submit' className={classes.submitButton} loading={isLoading}>
                            Create Account
                        </Button>
                    </motion.div>

                    <motion.div className={classes.securityBadge} variants={itemVariants}>
                        <svg viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z' />
                        </svg>
                        Your data is secure and encrypted
                    </motion.div>
                </Form>

                <motion.div className={classes.footer} variants={itemVariants}>
                    Already have an account?
                    <a href={Routes.login}>Sign in</a>
                </motion.div>
            </motion.div>
        </div>
    );
}
