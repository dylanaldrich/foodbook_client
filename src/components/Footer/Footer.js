/* imports */
import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';

import '../../App.css';

/* Footer Component */
const Footer = (props) => {
    return (
        <footer className="text-muted footer">
            <div className="container mx-0">
                <p className="float-right">
                <ScrollUpButton />
                </p>
                {/* <p id='copyright'>&copy; {(new Date().getFullYear())} foodbook</p> */}
            </div>
        </footer>
    );
};

export default Footer;
