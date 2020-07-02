export default {
    container: {
        height: '100%',
        position: 'relative',
        display: 'grid',
        gridTemplateAreas: `
            "header"
            "content"
            "footer"
        `,
    },
    header: {
        gridArea: 'header',
        position: 'sticky',
        background: '#ffffff',
        top: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50px) repeat(4, minmax(0, 1fr)) repeat(3, 50px)',
        borderBottom: [['1px', 'solid', '#e6e6e6']]
    },
    content: {
        gridArea: 'content',
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        gridArea: 'pagination.jsx',
        position: 'sticky',
        bottom: 0,
        padding: 20,
        background: '#ffffff',
        borderTop: [['1px', 'solid', '#e6e6e6']]
    },
    row: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50px) repeat(4, minmax(0, 1fr)) repeat(3, 50px)',

        '&:hover': {
            background: '#f8fafb'
        },

        '& + $row': {
            borderTop: [['1px', 'solid', '#e6e6e6']]
        }
    },
    cell: {
        color: '#4c4c4c',
        fontSize: '18px',
        fontWeight: 50,
        padding: [['10px', '10px']],
        wordBreak: 'break-word',
        marginTop: '12px',
        marginBottom: '10px',
    },
    headerCell: {
        color: '#a5aeb3',
        fontSize: '18px',
        fontWeight: 50,
        padding: [['10px', '10px']]
    },
    link: {
        color: '#4db2ff',
        textDecoration: 'none'
    },
    placeholder: {
        display: 'block',
        padding: 20,
        textAlign: 'center',
        color: '#A0A0A0',
        fontSize: 18,
        borderBottom: [['1px', 'solid', '#e6e6e6']]
    },
    button: {
        background: 'transparent',
        cursor: 'pointer',
        border: '0',
        padding: '0',
        opacity: '.8',
        '&:hover': {
            opacity: '1'
        },
        '&:focus': {
            outline: 'none'
        },
        '&:active': {
            opacity: '.5'
        }
    },
};
