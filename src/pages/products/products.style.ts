// home.style.ts
import { createUseStyles } from 'react-jss';

const useProductsStyle = createUseStyles({
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        '& th, & td': {
            border: '1px solid #ddd',
            padding: '10px',
            textAlign: 'left',
        },
        '& th': {
            backgroundColor: '#f5f5f5',
        },
    },
    button: {
        marginRight: '10px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&.add': { backgroundColor: '#4CAF50', color: '#fff' },
        '&.edit': { backgroundColor: '#2196F3', color: '#fff' },
        '&.delete': { backgroundColor: '#f44336', color: '#fff' },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
        '& input, & select': {
            padding: '8px',
            fontSize: '14px',
        },
        '& button': {
            width: '120px',
        },
    },
});

export default useProductsStyle;
