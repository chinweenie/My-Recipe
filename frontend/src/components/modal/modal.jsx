import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import './modal.css';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    let componentClassName;

    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            componentClassName = "modal-child-login";
            break;
        case 'register':
            component = <SignupFormContainer />;
            componentClassName = "modal-child-signup";
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={componentClassName} onClick={event => event.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    modal: state.UI.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);