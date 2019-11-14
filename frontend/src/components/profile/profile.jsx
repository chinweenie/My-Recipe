import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.clickAddress = this.clickAddress.bind(this);
    }
    componentDidMount(){
        document.addEventListener("click", (e) => {
            this.clickAddress(e);
        });
    }
    clickAddress(e){
        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < 3; i++){
            inputs[i].size = Math.min(inputs[i].id.length || inputs[i].value.length);
        }
        if (e.target.tagName === "INPUT")
            e.target.size = 12;
    }
    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                        <div className="profile-picture">

                        </div>
                        <div className="profile-info">
                        <div className="edit profile-name">
                            <h1>User Name</h1>
                            <i className="fa fa-pencil fa-lg"></i>
                        </div>
                            <div className="edit">
                                <textarea placeholder="Tell us about yourself here" wrap="off"/>
                                <i className="fa fa-pencil fa-lg"></i>
                            </div>
                            <div className="profile-social-media">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-pinterest"></i>
                                <i className="fas fa-globe-americas"></i>
                                <div className="profile-address">
                                    <input onClick={e => this.clickAddress(e)} size="4" placeholder="City" id="city" />,
                                    <input onClick={e => this.clickAddress(e)} size="5" placeholder="State" id="state"/>,
                                    <input onClick={e => this.clickAddress(e)} size="7" placeholder="Country" id="country"/>
                                </div>
                            </div>
                        </div>
                       
                </div>
                <div className="profile-tabs">
                    <Link to="/profile/userid">SAVED RECIPES</Link>
                    <Link to="/settings/preferences">PREFERENCES</Link>
                    <Link to="/settings">SETTINGS</Link>
                </div>
                <div className="profile-search">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search My Yums" />
                </div>

                
                <h2>All Yums</h2>
                <div className="profile-yums">

                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                </div>
                <h2>Collections</h2>
                <div className="profile-collections">
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                    <div className="profile-yum">
                    </div>
                </div>
            </div>
        )
    }
}
