//General Page Layout with Header, Children and Footer

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';

function PageLayout(props) {
    return (
        <>
        <GlobalStyles />
            <Header/>
            {props.children}
            <Footer/>
        </>
            
        
    );
}

export default PageLayout;