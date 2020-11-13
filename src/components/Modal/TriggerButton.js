/* imports */
import React from 'react';

import './TriggerButton.css';


/* Trigger Button Component */
const TriggerButton = ({ triggerText, buttonRef, showModal}) => {    
    // renders different type of trigger button for modals that live in the navbar
    if(triggerText === "Log In" || triggerText === "Sign Up") {
        return (
            <div 
            className={`nav-link ${triggerText === "Sign Up" ? "signup-link" : ""}`} 
            ref={buttonRef}
            onClick={showModal}
            >
                {triggerText}
            </div>
        );
    };
    
    return (
        <button
            className="btn btn-md btn-info center modal-button"  
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    );
};

export default TriggerButton;

// Source: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571