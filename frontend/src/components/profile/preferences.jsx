import React, { Component } from 'react'

export default class Preferences extends Component {
    render() {
        return (
            <div className="preference">
                <div className="preference-row">
                    <h1>Diets</h1>
                    <p>Select from the diets besow and we will only show you recipes that match</p>
                    <div className="preference-row-item">
                        ADD DIETS
                    </div>
                </div>
                
            </div>
        )
    }
}
