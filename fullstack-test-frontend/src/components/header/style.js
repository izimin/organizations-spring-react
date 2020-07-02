export default {
    container: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: '24px',
        color: '#4d4d4d',
    },
    controls: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    action: {
        fontSize: '24px',
        cursor: 'pointer',
        color: '#4db2ff',

        '&:hover': {
            opacity: 0.8
        },

        '& + $action': {
            marginLeft: 20
        }
    },
    button: {
        background: 'transparent',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        border: '0',
        padding: '0',
        marginRight: '25px',
        borderRadius: '50px',
        '&:hover': {
            background: '#E1E1E1'
        },
        '&:focus': {
            outline: 'none'
        },
        '&:active': {
            background: '#ACB6BB'
        },
    },
    inputText: {
        fontSize: '18px',
        height: '30px',
        padding: '5px',
        margin: 0,
        '&:focus': {
            outline: 'none'
        },
        width: '500px',
        border: '0',
        borderBottom: [['1px', 'solid', '#e6e6e6']],
    },
    search: {
        flex: '2',
        display: 'flex',
        flexDirection: 'row',

    }
};
