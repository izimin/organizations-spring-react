export default {
    item: {
        listStyleType: 'none',
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        background: 'transparent',
        cursor: 'pointer',
        border: '0',
        padding: '0',
        marginRight: '10px',
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
    paging: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px',
        marginTop: '15px'
    }
};
