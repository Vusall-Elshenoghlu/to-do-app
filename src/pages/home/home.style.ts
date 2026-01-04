import { createUseStyles } from 'react-jss';

export const useHomeStyles = createUseStyles({
    page: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        padding: '32px',
        overflowY: 'auto',
    },
    emptyState: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
    },
    projectView: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    projectHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
    },
    projectTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        '& h1': {
            margin: 0,
            fontSize: '28px',
            fontWeight: 600,
        },
    },
    projectColor: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
    },
    projectStats: {
        marginBottom: '24px',
    },
    taskCount: {
        fontSize: '14px',
        color: '#8c8c8c',
    },
    todoList: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '24px',
        minHeight: '400px',
    },
});