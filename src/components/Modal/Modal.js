/* imports */
import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

/* Forms */
import RegisterForm from './Forms/RegisterForm';
import LoginForm from './Forms/LoginForm';
import AddRecipeForm from './Forms/AddRecipeForm';
import AddFoodbookForm from './Forms/AddFoodbookForm';
import EditRecipeForm from './Forms/EditRecipeForm';
import EditUserForm from './Forms/EditUserForm';
import EditFoodbookForm from './Forms/EditFoodbookForm';


/* Modal Component */
export const Modal = ({
    // destructured props:
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    triggerText,
    foodbookId,
    recipeName,
    edamam_id,
    recipeType,
    savedFoodbooks,
    findProfile,
    profileId,
    findOneRecipe,
    currentRecipeId,
    savedRecipeId,
    findFoodbook,
    }) => {

    // determine which form to render inside modal
    function setForm (triggerText) {
        if (triggerText === 'Sign Up') {
            return (<RegisterForm closeModal={closeModal} />);
        } else if (triggerText === 'Login') {
            return (<LoginForm closeModal={closeModal} />);
        } else if (triggerText === "Save Recipe") {
            return (<AddRecipeForm 
                closeModal={closeModal} 
                recipeName={recipeName}
                edamam_id={edamam_id}
                findOneRecipe={findOneRecipe}
                currentRecipeId={currentRecipeId}
            />);
        } else if (triggerText === "Edit Recipe") {
            return (<EditRecipeForm 
                closeModal={closeModal} 
                recipeName={recipeName}
                edamam_id={edamam_id}
                savedFoodbooks={savedFoodbooks}
                recipeType={recipeType}
                savedRecipeId={savedRecipeId}
            />);
        } else if (triggerText === "Edit Profile") {
            return (<EditUserForm 
                findProfile={findProfile}
                profileId={profileId}
                closeModal={closeModal} 
            />);
        } else if (triggerText === "Create a foodbook") {
            return (<AddFoodbookForm 
                closeModal={closeModal} 
                findProfile={findProfile}
                profileId={profileId} 
            />);
        } else if (triggerText === "Edit foodbook") {
            return (<EditFoodbookForm 
                closeModal={closeModal} 
                foodbookId={foodbookId}
                findFoodbook={findFoodbook}
            />);
        } 
    };

    // create Focus Trap: locks background when modal is open and in focus
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area" ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeModal}
                    >
                        <span id="close-modal" className="_hide-visual">
                            Close
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        {setForm(triggerText)}
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

export default Modal;

// Source: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571