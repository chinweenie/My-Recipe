import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(Navbar);