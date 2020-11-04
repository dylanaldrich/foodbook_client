/* imports */
import React, { Component } from 'react';

import { Modal } from './Modal';
import TriggerButton from './TriggerButton';


/* Modal Container Component */
export class ModalContainer extends Component {
    state = { isShown: false };
    showModal = () => {
        this.setState({ isShown: true }, () => {
        this.closeButton.focus();
        });
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
        this.closeModal();
        }
    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render() {
        return (
            <>
                <TriggerButton
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                    triggerText={this.props.triggerText}
                />
                {this.state.isShown ? (
                    <Modal
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                        triggerText={this.props.triggerText}
                        foodbookId={this.props.foodbookId}
                        recipeName={this.props.recipeName}
                        edamam_id={this.props.edamam_id}
                        recipeType={this.props.recipeType} 
                        savedFoodbooks={this.props.foodbooks}
                        findProfile={this.props.findProfile}
                        profileId={this.props.profileId}
                        findOneRecipe={this.props.findOneRecipe}
                        currentRecipeId={this.props.currentRecipeId}
                        savedRecipeId={this.props.savedRecipeId}
                    />
                ) : null}
            </>
        );
    };
};

export default ModalContainer;

// Adapted from: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571