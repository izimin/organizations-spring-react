export default {
    '@global :host > div': {
        height: '100%'
    },
    container: {
        display: 'grid',
        gridRowGap: 0,
        gridTemplateRows: [['auto', '1fr']],
        gridTemplateAreas: `
            "header"
            "content"
            "footer"
        `
    },
    header: {
        'grid-area': 'header'
    },
    content: {
        'grid-area': 'content'
    },
    footer: {
        'grid-area': 'pagination.jsx'
    },
};
