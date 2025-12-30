import { createUseStyles } from "react-jss";

export const useFormResponsesStyles = createUseStyles({
    container: {
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 30,
        color: "#1F3A93",
    },
    cardsWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 20,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center",
    },
    name: {
        fontWeight: 600,
        fontSize: 16,
        color: "#0B3C5D",
    },
    date: {
        fontSize: 12,
        color: "#888",
    },
    email: {
        fontSize: 14,
        fontWeight: 500,
        color: "#1F3A93",
        marginBottom: 10,
    },
    message: {
        fontSize: 14,
        color: "#333",
        lineHeight: 1.5,
    },
});
