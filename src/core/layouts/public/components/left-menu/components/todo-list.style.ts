import {createUseStyles} from "react-jss";

export const useTodoListStyles = createUseStyles({
    todoContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        '@media (max-width: 768px)': {
            padding: 16,
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        '& h2': {
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
        },
    },
    listItem: {
        padding: 16,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 8,
        },
    },
    meta: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    actions: {
        display: 'flex',
        gap: 8,
    },
    emptyContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
});
