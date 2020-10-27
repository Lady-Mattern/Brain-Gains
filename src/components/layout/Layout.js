import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}