import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class MainPage extends React.Component {

    render() {
        let { openModal, closeModal } = this.props;
        return (
            <div>
                <h1>My Recipe</h1>
                <button onClick={() => openModal('login')}>Sign In</button>
                <button onClick={() => openModal('register')}>Sign Up</button>
                <footer>
                    Copyright &copy; 2019 My Recipe
                </footer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(MainPage);