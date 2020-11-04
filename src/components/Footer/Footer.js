/* imports */
import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';


/* Footer Component */
const Footer = (props) => {
    return (
        <footer className="text-muted">
            <div className="container mx-0">
                <p className="float-right">
                {/* <a href="#">Back to top</a> */}
                <ScrollUpButton />
                </p>
                <p id='copyright'>&copy; {(new Date().getFullYear())} foodbook</p>
            </div>
        </footer>
    );
};

export default Footer;
