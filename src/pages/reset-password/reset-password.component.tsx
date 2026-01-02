
import { Button, Card, Form, Input } from "antd";
import { useResetPasswordStyles } from "./reset-password.style";
import { useCallback, useMemo } from "react";
import type { FormRule } from "antd";
import { motion } from "framer-motion";
import useLocalization from "../../assets/lang";
import {IResetPasswordFormValues} from "./reset-password";
import {ResetPasswordIcon} from "../../assets/images/icons/logo";
import {Routes} from "../../router/routes";






const ResetPassword = () => {
    const translate = useLocalization();
    const classes = useResetPasswordStyles();

    const initialValues: IResetPasswordFormValues = {
        password: "",
        confirmPassword: "",
    };

    const rules: { [key: string]: FormRule[] } = useMemo(
        () => ({
            password: [
                {
                    required: true,
                    message: translate("input_required"),
                },
                {
                    min: 8,
                    message: translate("password_min_length"),
                },
            ],
            confirmPassword: [
                {
                    required: true,
                    message: translate("input_required"),
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error(translate("passwords_not_match")));
                    },
                }),
            ],
        }),
        [translate],
    );

    const onSubmit = useCallback((values: IResetPasswordFormValues) => {
        console.log("Reset password with:", values);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <motion.div className={classes.page} initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className={classes.panel} variants={cardVariants}>
                <Card className={classes.card}>
                    <motion.div variants={itemVariants}>
                        <div className={classes.logo}>
                            <ResetPasswordIcon />
                        </div>
                        <div className={classes.header}>
                            <h1 className={classes.title}>Reset Password</h1>
                            <p className={classes.subtitle}>Enter your new password</p>
                        </div>
                    </motion.div>

                    <Form
                        name="reset-password"
                        initialValues={initialValues}
                        onFinish={onSubmit}
                        layout="vertical"
                        autoComplete={"off"}
                    >
                        <motion.div variants={itemVariants}>
                            <Form.Item rules={rules.password} name="password" label="New Password" className={classes.formItem}>
                                <Input.Password placeholder="Enter new password" size="large" />
                            </Form.Item>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Form.Item
                                rules={rules.confirmPassword}
                                name="confirmPassword"
                                label="Confirm Password"
                                className={classes.formItem}
                            >
                                <Input.Password placeholder="Confirm new password" size="large" />
                            </Form.Item>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button className={classes.submitButton} type="primary" htmlType="submit" block>
                                Reset Password
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
};
export default ResetPassword;
