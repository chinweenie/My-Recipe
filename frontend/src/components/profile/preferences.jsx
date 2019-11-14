import React, { Component } from 'react'

export default class Preferences extends Component {
    render() {
        return (
            <div className="preference">
                <div className="preference-row">
                    <h2>Diets</h2>
                    <p>Select from the diets besow and we will only show you recipes that match.</p>
                    <div className="preference-row-item">
                        <div>+
                            <p>ADD DIETS</p>
                        </div>
                    </div>
                </div>
                <div className="preference-row">
                    <h2>Allergies</h2>
                    <p>Select from the allergies below and we will only show you recipes that match.</p>
                    <div className="preference-row-item">
                        <div>+
                            <p>ADD ALLERGIES</p>
                        </div>
                    </div>
                </div>
                <div className="preference-row">
                    <h2>Disliked Ingredients</h2>
                    <p>Add disliked ingredients to avoid recipes that include them.</p>
                    <div className="preference-row-item">
                        <div>+
                            <p>ADD DISLIKED INGREDIENTS</p>
                        </div>
                    </div>
                </div>
                <div className="preference-row">
                    <h2>Favorite Cuisines</h2>
                    <p>Select your favorite cuisines to see more of what you like.</p>
                    <div className="preference-row-item">
                        <div>+
                            <p>ADD DIETS</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
