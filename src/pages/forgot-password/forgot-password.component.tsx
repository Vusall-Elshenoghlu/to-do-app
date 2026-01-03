import {Button, Card, Form, Input} from 'antd';
import {useForgotPasswordStyles} from './forgot-password.style';
import {useCallback, useMemo} from 'react';
import type {FormRule} from 'antd';
import {motion} from 'framer-motion';
import {ForgotPasswordLogoIcon} from '../../assets/images/icons/logo';
import {Routes} from '../../router/routes';
import useLocalization from "../../assets/lang";
import {useForgotPasswordMutation} from "./actions/forgot-password.mutation";
import {IForgotPasswordFormValues} from "./forgot-password";


function ForgotPasswordComponent() {

    const translate = useLocalization();
    const classes = useForgotPasswordStyles();
    const {mutate: forgotPassword, isLoading} = useForgotPasswordMutation();


    const initialValues = {
        email: '',
    };

    const rules: { [key: string]: FormRule[] } = useMemo(
        () => ({
            email: [
                {
                    required: true,
                    message: translate('input_required'),
                },
                {
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: translate('email_invalid'),
                },
            ],
        }),
        [translate],
    );

    const onSubmit = useCallback((values: IForgotPasswordFormValues) => {
        forgotPassword({
            email: values.email,
        });
    }, [forgotPassword]);


    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {opacity: 0, y: 30, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <motion.div className={classes.page} initial='hidden' animate='visible' variants={containerVariants}>
            <motion.div className={classes.panel} variants={cardVariants}>
                <Card className={classes.card}>
                    <motion.div variants={itemVariants}>
                        <div className={classes.logo}>
                            <ForgotPasswordLogoIcon/>
                        </div>
                        <div className={classes.header}>
                            <h1 className={classes.title}>Forgot Password</h1>
                            <p className={classes.subtitle}>Enter your email to reset your password</p>
                        </div>
                    </motion.div>

                    <Form
                        name='forgot-password'
                        initialValues={initialValues}
                        onFinish={onSubmit}
                        layout='vertical'
                        autoComplete={'off'}
                    >
                        <motion.div variants={itemVariants}>
                            <Form.Item rules={rules.email} name='email' label='Email Address'
                                       className={classes.formItem}>
                                <Input placeholder='vusal.huseynli@gmail.com' size='large'/>
                            </Form.Item>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button className={classes.submitButton} type='primary' htmlType='submit' block>
                                Send Reset Link
                            </Button>
                        </motion.div>
                    </Form>

                    <motion.div variants={itemVariants}>
                        <div className={classes.footer}>
                            Remember your password?
                            <a href={Routes.login}>Sign In</a>
                        </div>
                    </motion.div>
                </Card>
            </motion.div>
        </motion.div>
    );
}

export default ForgotPasswordComponent;
