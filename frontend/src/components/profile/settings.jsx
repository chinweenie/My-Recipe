import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="settings-flex-item">
                    <h2>General Information</h2>
                    <div className="flex-row">
                        <div className="preference-row">
                            <div className="preference-row-item">
                                <div>+
                            <p>GENDER</p>
                                </div>
                            </div>
                        </div>
                        <div className="preference-row">
                            <div className="preference-row-item">
                                <div>+
                            <p>SKILLS</p>
                                </div>
                            </div>
                        </div>
                        <div className="preference-row">
                            <div className="preference-row-item">
                                <div>+
                            <p>HOUSEHOLD SIZE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settings-flex-item">
                    <h2>Account Settings</h2>
                </div>
                <div className="settings-flex-item">
                    <h2>Subscription</h2>
                </div>
                <div className="settings-flex-item">
                    <h2>Social Settings</h2>
                </div>
                <div className="settings-flex-item">
                    <h2>Email Preferences</h2>
                </div>
                <div className="flex-row">
                    <div className="confirm-btn">Save</div>
                    <div className="cancel-btn">Unsubscribe from all</div>
                </div>
            </div>
        )
    }
}
