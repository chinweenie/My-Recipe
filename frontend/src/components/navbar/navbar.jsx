import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render(){
        let { openModal, closeModal } = this.props;
        return (
            <div className="main-nav-container">
                <div className="nav-section1">
                    <Link to="/"><img src="logo.png" alt="logo" /></Link>
                    <Link to="/profile"><div className="nav-profile-picture"></div></Link>
                </div>
                <div className="nav-section2">
                    <Link to="/profile">My Feed</Link>
                    <a href="">Articles</a>
                    <a href="">Plan & Shop</a>
                    <a href="">Browse</a>
                    <a href="">My Recipe Pro</a>
                </div>
                <div className="nav-section3">
                    <a href="">Saved Recipes</a>
                    <Link to="/"><i className="fas fa-plus"></i>&nbsp;New Collection</Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;All My Recipes</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Breakfasts</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Desserts</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Dinners</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Drinks</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Sides</i></Link>
                    <Link to="/"><i className="far fa-folder">&nbsp;Drinks</i></Link>
                </div>
                <div className="nav-section4">

                </div>
                <div className="nav-section5">
                    <div>...</div>
                    <div>More</div>
                </div>
            </div>
        )
    }
}

export default Navbar;