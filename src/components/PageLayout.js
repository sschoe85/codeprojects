//General Page Layout with Header, Children and Footer

import React from 'react';
import Header from './Header';
import Footer from './Footer';

function PageLayout(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
            
        
    );
}

export default PageLayout;