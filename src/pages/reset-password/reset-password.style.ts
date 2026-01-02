import { createUseStyles } from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";


const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        padding: rem(20),
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
      `,
            animation: "$meshMove 20s ease infinite",
            pointerEvents: "none",
        },
        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
        radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(2px 2px at 60% 70%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(2px 2px at 90% 60%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 33% 80%, rgba(255, 255, 255, 0.3), transparent)
      `,
            backgroundSize: "200% 200%",
            animation: "$particleFloat 15s ease infinite",
            pointerEvents: "none",
        },
        "@media (max-width: 768px)": {
            padding: rem(16),
        },
    },
    "@keyframes meshMove": {
        "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: 1,
        },
        "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            opacity: 0.8,
        },
        "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: 0.9,
        },
    },
    "@keyframes particleFloat": {
        "0%, 100%": {
            backgroundPosition: "0% 0%",
        },
        "50%": {
            backgroundPosition: "100% 100%",
        },
    },
    "@keyframes glow": {
        "0%, 100%": {
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
        },
        "50%": {
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)",
        },
    },
    panel: {
        width: "100%",
        maxWidth: rem(460),
        position: "relative",
        zIndex: 1,
        "@media (max-width: 768px)": {
            maxWidth: "100%",
        },
    },
    card: {
        borderRadius: rem(24),
        boxShadow: `
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(99, 102, 241, 0.15)
    `,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        background: "rgba(26, 26, 46, 0.7)",
        backdropFilter: "blur(40px) saturate(180%)",
        position: "relative",
        animation: "$glow 3s ease-in-out infinite",
        "& .ant-card-body": {
            padding: `${rem(48)} ${rem(40)}`,
            background: "transparent",
            "@media (max-width: 768px)": {
                padding: rem(32),
            },
        },
    },
    header: {
        marginBottom: rem(40),
        textAlign: "center",
    },
    logo: {
        marginBottom: rem(24),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg, & img": {
            width: rem(48),
            height: rem(48),
            filter: "drop-shadow(0 4px 12px rgba(99, 102, 241, 0.4))",
        },
    },
    title: {
        fontSize: rem(32),
        fontWeight: 700,
        background: "linear-gradient(135deg, #ffffff 0%, #a8a8ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: rem(12),
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
        "@media (max-width: 768px)": {
            fontSize: rem(28),
        },
    },
    subtitle: {
        fontSize: rem(15),
        color: "rgba(255, 255, 255, 0.6)",
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.6,
        "@media (max-width: 768px)": {
            fontSize: rem(14),
        },
    },
    formItem: {
        marginBottom: rem(24),
        "& .ant-form-item-label": {
            paddingBottom: rem(8),
            "& > label": {
                fontWeight: 600,
                fontSize: rem(14),
                color: "rgba(255, 255, 255, 0.9)",
                height: "auto",
            },
        },
        "& .ant-input": {
            borderRadius: rem(12),
            padding: `${rem(14)} ${rem(16)}`,
            fontSize: rem(15),
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(0, 0, 0, 0.3)",
            color: "#ffffff",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&::placeholder": {
                color: "rgba(255, 255, 255, 0.4)",
            },
            "&:hover": {
                borderColor: "rgba(99, 102, 241, 0.5)",
                background: "rgba(0, 0, 0, 0.4)",
            },
            "&:focus": {
                borderColor: "rgba(99, 102, 241, 0.8)",
                background: "rgba(0, 0, 0, 0.5)",
                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.1)",
            },
        },
        "& .ant-input-password": {
            borderRadius: rem(12),
            padding: `${rem(4)} ${rem(16)}`,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
                borderColor: "rgba(99, 102, 241, 0.5)",
                background: "rgba(0, 0, 0, 0.4)",
            },
            "&:focus-within": {
                borderColor: "rgba(99, 102, 241, 0.8)",
                background: "rgba(0, 0, 0, 0.5)",
                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.1)",
            },
            "& .ant-input": {
                border: "none",
                padding: `${rem(10)} 0`,
                background: "transparent",
                "&:focus": {
                    boxShadow: "none",
                },
            },
            "& .ant-input-suffix": {
                color: "rgba(255, 255, 255, 0.5)",
            },
        },
        "& .ant-form-item-has-error .ant-input, & .ant-form-item-has-error .ant-input-password": {
            borderColor: "rgba(239, 68, 68, 0.5)",
            "&:focus, &:focus-within": {
                borderColor: "rgba(239, 68, 68, 0.8)",
                boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.15)",
            },
        },
        "& .ant-form-item-explain-error": {
            fontSize: rem(13),
            color: "rgba(248, 113, 113, 0.9)",
            marginTop: rem(6),
        },
    },
    submitButton: {
        width: "100%",
        height: rem(52),
        borderRadius: rem(12),
        fontSize: rem(16),
        fontWeight: 600,
        background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        border: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)",
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            transition: "left 0.5s",
        },
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)",
            background: "linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)",
            "&::before": {
                left: "100%",
            },
        },
        "&:active": {
            transform: "translateY(0)",
        },
        "&:disabled, &.ant-btn-loading": {
            background: "rgba(100, 100, 100, 0.3)",
            cursor: "not-allowed",
            transform: "none",
            boxShadow: "none",
        },
    },
    footer: {
        marginTop: rem(32),
        textAlign: "center",
        fontSize: rem(14),
        color: "rgba(255, 255, 255, 0.5)",
        "& a": {
            color: "rgba(168, 85, 247, 0.9)",
            fontWeight: 600,
            textDecoration: "none",
            marginLeft: rem(6),
            transition: "color 0.3s ease",
            position: "relative",
            "&:hover": {
                color: "#c084fc",
                "&::after": {
                    width: "100%",
                },
            },
            "&::after": {
                content: '""',
                position: "absolute",
                bottom: -2,
                left: 0,
                width: 0,
                height: 1,
                background: "currentColor",
                transition: "width 0.3s ease",
            },
        },
    },
};

export const useResetPasswordStyles = createUseStyles(styles);
