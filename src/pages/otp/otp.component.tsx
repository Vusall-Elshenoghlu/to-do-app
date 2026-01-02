import {Button, Card, Form, Input, Space, message} from "antd";
import {useOtpStyles} from "./otp.style";
import {useCallback, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {Routes} from "../../router/routes";
import {useLocation, useNavigate} from "react-router-dom";
import {useVerifyOtp} from "./actions/otp.mutation";

interface IOtpValues {
    otp0?: string;
    otp1?: string;
    otp2?: string;
    otp3?: string;
    otp4?: string;
    otp5?: string;
}

function OtpComponent() {
    const classes = useOtpStyles();
    const location = useLocation();
    const email = location.state?.email;

    const navigate = useNavigate();
    const {mutate: verifyOtp, isLoading} = useVerifyOtp(() => navigate(Routes.login));

    const formRef = useRef<any>(null);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (!email) {
            message.error("Email not found. Please register again.");
            navigate(Routes.register, {replace: true});
        }
    }, [email, navigate]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;

        formRef.current.setFieldsValue({[`otp${index}`]: value});

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = formRef.current.getFieldValue(`otp${index}`);
        if (e.key === "Backspace" && !value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const onFinish = useCallback(
        (values: IOtpValues) => {
            const code = Object.values(values).join("");
            if (!code || code.length < 6) {
                message.error("Please enter complete 6-digit code");
                return;
            }

            verifyOtp({email, code});
            console.log("[v0] Verifying OTP:", code);
        },
        [email, verifyOtp]
    );


    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.1}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
    };


    return (
        <motion.div
            className={classes.page}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className={classes.panel} variants={itemVariants}>
                <Card className={classes.card}>
                    <div className={classes.header}>
                        <h1 className={classes.title}>Verify OTP</h1>
                        <p className={classes.subtitle}>
                            We've sent a 6-digit code to your email
                        </p>
                    </div>

                    <Form ref={formRef} onFinish={onFinish}>
                        <div className={classes.otpContainer}>
                            <Space size={8}>
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <Form.Item key={index} name={`otp${index}`} noStyle>
                                        <Input
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            maxLength={1}
                                            autoComplete="off"
                                            onChange={(e) => handleInputChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            style={{width: 40, textAlign: "center", fontSize: 20}}
                                            autoFocus={index === 0}
                                        />
                                    </Form.Item>
                                ))}
                            </Space>
                        </div>

                        <Button
                            className={classes.submitButton}
                            type="primary"
                            htmlType="submit"
                            block
                            loading={isLoading}
                            style={{marginTop: 20}}
                        >
                            Verify & Continue
                        </Button>
                    </Form>

                    <div className={classes.resendSection}>
                        {"Didn't receive the code?"}
                        <button type="button">Resend</button>
                    </div>

                    <div className={classes.footer}>
                        <a href={Routes.login}>Back to Sign In</a>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}

export default OtpComponent;
