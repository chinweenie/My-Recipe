import React from 'react';

class Navbar extends React.Component {

    render(){
        let { openModal, closeModal } = this.props;
        return (
            <div className="main-nav-container">
                <div className="nav-header">
                    <h1>My Recipe!</h1>
                </div>
                <div className="nav-scrollable">
                    <div className="auth-buttons">
                        <button onClick={() => openModal('login')}>Sign In</button>
                        <button onClick={() => openModal('register')}>Sign Up</button>
                    </div>
                    <a href="">My Feed</a>
                    <a href="">Articles</a>
                    <a href="">Plan & Shop</a>
                    <a href="">Browse</a>
                    <a href="">My Recipe Pro</a>
                    {/* <div className="nav-collections">
                        <a href="">Saved Recipes</a>
                        <div>New Collection</div>
                        <div>All My Recipes</div>
                        <div>Breakfasts</div>
                        <div>Desserts</div>
                        <div>Dinners</div>
                        <div>Drinks</div>
                        <div>Sides</div>
                    </div> */}
                </div>
                <div className="nav-footer">
                    <div className="dots">...</div>
                    <button>More</button>
                </div>
            </div>
        )
    }
}

export default Navbar;