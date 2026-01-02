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
        "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
        "33%": { transform: "translate(30px, -50px) scale(1.1)", opacity: 0.8 },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)", opacity: 0.9 },
    },
    "@keyframes particleFloat": {
        "0%, 100%": { backgroundPosition: "0% 0%" },
        "50%": { backgroundPosition: "100% 100%" },
    },
    "@keyframes glow": {
        "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)" },
        "50%": { boxShadow: "0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)" },
    },
    panel: {
        width: "100%",
        maxWidth: rem(460),
        position: "relative",
        zIndex: 1,
        "@media (max-width: 768px)": { maxWidth: "100%" },
    },
    card: {
        borderRadius: rem(24),
        boxShadow: `
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(99, 102, 241, 0.15)
    `,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(26, 26, 46, 0.7)",
        backdropFilter: "blur(40px) saturate(180%)",
        position: "relative",
        animation: "$glow 3s ease-in-out infinite",
        "& .ant-card-body": {
            padding: `${rem(48)} ${rem(40)}`,
            "@media (max-width: 768px)": { padding: rem(32) },
        },
    },
    header: { marginBottom: rem(40), textAlign: "center" },
    logo: {
        marginBottom: rem(24),
        display: "flex",
        justifyContent: "center",
        "& svg": {
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
        marginBottom: rem(12),
        letterSpacing: "-0.02em",
    },
    subtitle: {
        fontSize: rem(15),
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: 1.6,
    },
    otpContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: rem(32),
        "& .ant-input": {
            width: rem(50),
            height: rem(60),
            fontSize: rem(24),
            fontWeight: 700,
            textAlign: "center",
            borderRadius: rem(12),
            background: "rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover, &:focus": {
                borderColor: "rgba(99, 102, 241, 0.8)",
                background: "rgba(0, 0, 0, 0.4)",
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)",
            },
        },
    },
    submitButton: {
        height: rem(52),
        borderRadius: rem(12),
        fontSize: rem(16),
        fontWeight: 600,
        background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        border: "none",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(99, 102, 241, 0.5)",
        },
    },
    resendSection: {
        marginTop: rem(24),
        textAlign: "center",
        fontSize: rem(14),
        color: "rgba(255, 255, 255, 0.5)",
        "& button": {
            background: "none",
            border: "none",
            color: "rgba(168, 85, 247, 0.9)",
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: rem(4),
            "&:hover": { color: "#c084fc" },
        },
    },
    footer: {
        marginTop: rem(32),
        textAlign: "center",
        "& a": {
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: rem(14),
            textDecoration: "none",
            "&:hover": { color: "#fff" },
        },
    },
};

export const useOtpStyles = createUseStyles(styles);
