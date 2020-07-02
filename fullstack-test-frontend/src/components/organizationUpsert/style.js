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
        minWidth: '500px',
        maxWidth: '700px',
        margin: '0 auto',
        justifyContent: 'space-between',
        height: '200px'
    },
    label: {
        color: '#B5B5B5'
    },
    inputText: {
        fontSize: '18px',
        height: '30px',
        paddingLeft: '5px'
    },
    inputSelect: {
        fontSize: '18px',
        height: '35px',
        padding: '1px 0'
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '10px',
        height: '40px'
    },
    button: {
        textAlign: 'center',
        color: '#D5D5D5',
        backgroundColor: '#545B62',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '0',
        padding: '7px 10px 5px 10px',
        marginLeft: '10px',
        opacity: '.8',
        '&:hover': {
            opacity: '1'
        },
        '&:active': {
            opacity: '.5'
        }
    }
};
