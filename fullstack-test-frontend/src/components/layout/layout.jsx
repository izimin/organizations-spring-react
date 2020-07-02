import React from 'react';
import Footer from '../footer';

const Layout = ({
    Header
}) => ({classes, children}) => (
    <div className={classes.container}>
        <div className={classes.content}>
            {children}
        </div>
        <div className={classes.header}>
            <Header />
        </div>
        <div>
            <Footer />
        </div>
    </div>
);

export default Layout;
