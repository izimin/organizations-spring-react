export default {
    brand: {
        margin: '0',
        paddingTop: '4px',
        paddingLeft: '15px',
        color: '#D5D5D5',
    },

    nav: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#545B62',
        height: '50px',
    },

    links: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0',
        margin: '0',
        marginLeft: '20px'
    },

    item: {
        listStyleType: 'none',
        padding: '0 10px',
        height: '100%',
    },

    link: {
        display: 'block',
        textAlign: 'center',
        height: '80%',
        width: '100%',
        textDecoration: 'none',
        alignContent: 'center',
        fontSize: '15pt',
        padding: '5px 10px',
        color: '#D5D5D5',
        borderLeft: [['0.1px', 'solid', '#646C74']],

        '&:hover': {
            background: '#383C41'
        },

        '&:active': {
            opacity: '.4'
        }
    },

    linkActive: {
        paddingBottom: '2px',
        borderBottom: [['3px', 'solid', '#FF9F50']],
        background: '#383C41',
    }
};
