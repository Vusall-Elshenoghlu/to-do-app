
import { Button, Card, Form, Input, Divider } from "antd";
import { useLoginStyles } from "./login.style";
import { useCallback, useMemo } from "react";
import type { FormRule } from "antd";
import { useLogin } from "./actions/login.mutation";
import type { ILoginFormValues } from "./login";
import { motion } from "framer-motion";
import useLocalization from "../../assets/lang";
import {Routes} from "../../router/routes";

export default function LoginComponent() {
    const translate = useLocalization();
    const { mutate, isLoading } = useLogin();
    const classes = useLoginStyles();

    const initialValues: ILoginFormValues = {
        email: "",
        password: "",
    };

    const rules: { [key: string]: FormRule[] } = useMemo(
        () => ({
            email: [
                {
                    required: true,
                    message: translate("input_required"),
                },
                {
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: translate("email_invalid"),
                },
            ],
            password: [
                {
                    required: true,
                    message: translate("input_required"),
                },
            ],
        }),
        [translate],
    );

    const onSubmit = useCallback(
        (values: ILoginFormValues) => {
            mutate(values);
        },
        [mutate],
    );

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
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="12" fill="url(#gradient)" />
                                <path
                                    d="M24 12L14 22L24 32L34 22L24 12Z"
                                    fill="white"
                                    fillOpacity="0.9"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                                <path d="M24 22V36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="1" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={classes.header}>
                            <h1 className={classes.title}>Welcome Back</h1>
                            <p className={classes.subtitle}>Sign in to continue to your account</p>
                        </div>
                    </motion.div>

                    <Form name="login" initialValues={initialValues} onFinish={onSubmit} layout="vertical" autoComplete={'off'}>
                        <motion.div variants={itemVariants}>
                            <Form.Item rules={rules.email} name="email" label="Email Address" className={classes.formItem}>
                                <Input placeholder="you@example.com" size="large" />
                            </Form.Item>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Form.Item rules={rules.password} name="password" label="Password" className={classes.formItem}>
                                <Input.Password placeholder="Enter your password" size="large" />
                            </Form.Item>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className={classes.forgotPassword}>
                                <a href="/forgot-password">Forgot password?</a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button loading={isLoading} className={classes.submitButton} type="primary" htmlType="submit" block>
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </motion.div>
                    </Form>

                    <motion.div variants={itemVariants}>
                        <Divider className={classes.divider}>Or continue with</Divider>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className={classes.socialButtons}>
                            <button className={classes.socialButton} type="button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </button>
                            <button className={classes.socialButton} type="button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </button>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className={classes.footer}>
                            Don't have an account?
                            <a href={Routes.register}>Create one</a>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className={classes.securityBadge}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            Secured with 256-bit SSL encryption
                        </div>
                    </motion.div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
