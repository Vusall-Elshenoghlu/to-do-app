import { createUseStyles } from "react-jss";

const colors = {
    primary: "#4A90E2",
    secondary: "#6C63FF",
    gray: "#7F8C8D",
    white: "#fff",
    background: "#f0f2f5",
    cardBg: "rgba(255,255,255,0.9)",
    shadow: "0 4px 15px rgba(0,0,0,0.1)",
};

export const useHomeStyles = createUseStyles({
    page: {
        minHeight: "100vh",
        backgroundColor: colors.background,
        padding: "40px 20px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    header: {
        marginBottom: "40px",
        textAlign: "center",
        "& h1": {
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "8px",
        },
        "& p": {
            color: colors.gray,
            fontSize: "1.1rem",
        },
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        marginBottom: "40px",
    },
    statCard: {
        background: colors.white,
        borderRadius: "16px",
        padding: "24px",
        boxShadow: colors.shadow,
        display: "flex",
        alignItems: "center",
        gap: "20px",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        "&:hover": {
            transform: "translateY(-5px)",
        },
    },
    iconWrapper: {
        width: "56px",
        height: "56px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        backgroundColor: "rgba(74, 144, 226, 0.1)",
        color: colors.primary,
    },
    statInfo: {
        "& h3": {
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: 700,
        },
        "& p": {
            margin: 0,
            color: colors.gray,
            fontSize: "0.9rem",
            fontWeight: 500,
        },
    },
    contentGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        "@media (max-width: 992px)": {
            gridTemplateColumns: "1fr",
        },
    },
    sectionCard: {
        background: colors.white,
        borderRadius: "20px",
        padding: "32px",
        boxShadow: colors.shadow,
        "& h2": {
            marginBottom: "24px",
            fontSize: "1.25rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
        },
    },
    emptyState: {
        textAlign: "center",
        padding: "40px 0",
        color: colors.gray,
        "& p": {
            marginTop: "16px",
            fontSize: "1rem",
        },
    },
    todoItem: {
        padding: "16px",
        borderRadius: "12px",
        background: "#f8f9fa",
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        border: "1px solid #edf2f7",
        transition: "all 0.2s ease",
        "&:hover": {
            borderColor: colors.primary,
            background: colors.white,
        },
    },
    todoTag: {
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
    },
});
