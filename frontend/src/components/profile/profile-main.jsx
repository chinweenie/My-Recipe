import React, { Component } from 'react'

export default class ProfileMain extends Component {
    render() {
        return (
            <div className="">
                <div className="profile-search">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search My Yums" />
                </div>


                <h2>All Yums</h2>
                <div className="profile-yums">
                    <div className="profile-yum"></div>
                </div>
                <h2>Collections</h2>
                <div className="profile-collections">
                    <div className="profile-yum"></div>
                </div>
            </div>
        )
    }
}
