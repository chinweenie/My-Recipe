import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                        <div className="profile-picture">

                        </div>
                        <div className="profile-info">
                            <h2>User Name</h2>
                            <p>tell us about you here </p>
                            <div className="profile-social-media">

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
                <h2>collections</h2>
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
