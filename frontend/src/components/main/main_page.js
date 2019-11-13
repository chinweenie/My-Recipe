import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavbarContainer from '../navbar/navbar_container';
import SearchToolsContainer from '../search/search_tools_container';

class MainPage extends React.Component {

    render() {
        let { openModal, closeModal } = this.props;
        return (
            <div className="outer-main-container">
                {/* <h1>My Recipe</h1>
                <button onClick={() => openModal('login')}>Sign In</button>
                <button onClick={() => openModal('register')}>Sign Up</button>
                <footer>
                    Copyright &copy; 2019 My Recipe
                </footer> */}
                <div className="left-bar">
                    <NavbarContainer />
                </div>
                <div className="main-content">
                    <SearchToolsContainer />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(MainPage);