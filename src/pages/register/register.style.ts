import { createUseStyles } from "react-jss";

export const useRegisterStyles = createUseStyles({
    container: {
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        backgroundSize: "200% 200%",
        animation: "$gradientShift 15s ease infinite",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            animation: "$pulse 8s ease-in-out infinite",
        },
    },
    "@keyframes gradientShift": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
    "@keyframes pulse": {
        "0%, 100%": { transform: "translate(0, 0) scale(1)" },
        "50%": { transform: "translate(-10%, -10%) scale(1.1)" },
    },
    card: {
        width: "100%",
        maxWidth: "500px",
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        borderRadius: "24px",
        padding: "48px 40px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1)",
        position: "relative",
        zIndex: 1,
        "@media (max-width: 768px)": {
            maxWidth: "100%",
            padding: "40px 24px",
            borderRadius: "20px",
        },
    },
    header: {
        textAlign: "center",
        marginBottom: "40px",
    },
    title: {
        fontSize: "36px",
        fontWeight: 700,
        background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "12px",
        "@media (max-width: 768px)": {
            fontSize: "28px",
        },
    },
    subtitle: {
        fontSize: "16px",
        color: "#94A3B8",
        fontWeight: 400,
    },
    form: {
        width: "100%",
    },
    formRow: {
        display: "flex",
        gap: "16px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "24px",
        },
    },
    formItem: {
        marginBottom: "24px",
        flex: 1,

        "& .ant-form-item-label > label": {
            color: "#FFFFFF !important",
            fontSize: "14px",
            fontWeight: 500,
        },

        "& .ant-input, & .ant-picker, & .ant-select-selector": {
            background: "rgba(30, 41, 59, 0.6)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "15px",
            color: "#E2E8F0",
            transition: "all 0.3s ease",

            "&:hover": {
                background: "rgba(30, 41, 59, 0.8)",
                borderColor: "rgba(59, 130, 246, 0.5)",
            },

            "&.ant-input-focused, &.ant-picker-focused": {
                background: "rgba(30, 41, 59, 0.9)",
                borderColor: "#3B82F6",
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
            },
        },

        "& .ant-input-affix-wrapper": {
            background: "rgba(30, 41, 59, 0.6)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "12px",
            padding: "12px 16px",

            "&:hover": {
                background: "rgba(30, 41, 59, 0.8)",
            },

            "&.ant-input-affix-wrapper-focused": {
                background: "rgba(30, 41, 59, 0.9)",
                borderColor: "#3B82F6",
            },

            "& input": {
                background: "transparent",
                border: "none",
                color: "#E2E8F0",
            },
        },

        "& input::placeholder": {
            color: "#64748B",
        },

        "& input:-webkit-autofill, \
           & input:-webkit-autofill:hover, \
           & input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px rgba(30, 41, 59, 0.9) inset !important",
            WebkitTextFillColor: "#E2E8F0 !important",
            caretColor: "#E2E8F0",
            transition: "background-color 9999s ease-in-out 0s",
        },
        "& .ant-input-password-icon": {
            color: "#CBD5F5 !important",
        },


    },


    submitButton: {
        width: "100%",
        height: "52px",
        background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#FFFFFF",
        cursor: "pointer",
        transition: "all 0.3s ease",
        marginTop: "16px",
        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 30px rgba(59, 130, 246, 0.6)",
            background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        },
        "&:active": {
            transform: "translateY(0)",
        },
        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
            transform: "none",
        },
    },
    divider: {
        margin: "32px 0",
        position: "relative",
        textAlign: "center",
        "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            width: "100%",
            height: "1px",
            background: "rgba(59, 130, 246, 0.2)",
        },
        "& span": {
            background: "rgba(15, 23, 42, 0.9)",
            padding: "0 16px",
            color: "#64748B",
            fontSize: "14px",
            position: "relative",
            zIndex: 1,
        },
    },
    socialButtons: {
        display: "flex",
        gap: "16px",
        marginBottom: "32px",
    },
    socialButton: {
        flex: 1,
        height: "48px",
        background: "rgba(30, 41, 59, 0.6)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        color: "#E2E8F0",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            background: "rgba(30, 41, 59, 0.8)",
            borderColor: "rgba(59, 130, 246, 0.5)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
        },
    },
    footer: {
        textAlign: "center",
        marginTop: "32px",
        color: "#94A3B8",
        fontSize: "14px",
        "& a": {
            color: "#3B82F6",
            textDecoration: "none",
            fontWeight: 500,
            marginLeft: "4px",
            transition: "color 0.3s ease",
            "&:hover": {
                color: "#60A5FA",
                textDecoration: "underline",
            },
        },
    },
    securityBadge: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "24px",
        padding: "12px",
        background: "rgba(34, 197, 94, 0.1)",
        border: "1px solid rgba(34, 197, 94, 0.3)",
        borderRadius: "8px",
        color: "#4ADE80",
        fontSize: "13px",
        "& svg": {
            width: "16px",
            height: "16px",
        },
    },
});
