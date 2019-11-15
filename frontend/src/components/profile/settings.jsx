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
                <div className="settings-flex-item" id="account-settings">
                    <h2>Account Settings</h2>
                    <div className="flex-row">
                        <label className="flex-column">
                            <input />
                            <strong>EMAIL</strong>
                        </label>
                        <label className="flex-column">
                            <input type="password" placeholder="Create a new password" />
                            <strong>PASSWORD</strong>
                        </label>
                    </div>
                </div>
                <div className="settings-flex-item">
                    <h2>Subscription</h2>
                    <div className="flex-row">
                        <div className="confirm-btn">Start Free Trial</div>  <strong className="align-self-center">Learn More</strong>
                    </div>
                </div>
                <div className="settings-flex-item">
                    <h2>Social Settings</h2>
                    <label htmlFor="search-setting" className="settings-label">
                        <input type="checkbox" name="search-setting" value="search-setting" id="search-setting" />
                        Allow search engines to show your My-Recipe profile in search results
                    </label>
                </div>
                <div className="settings-flex-item">
                    <h2>Email Preferences</h2>
                    <label htmlFor="user-feedback-surveys-setting" className="settings-label">
                        <input type="checkbox" name="user-feedback-surveys-setting" value="user-feedback-surveys-setting" id="user-feedback-surveys-setting" />
                        <strong>User Feedback Surveys:</strong> Occasionally, weld like to ask you how we are doing
                    </label><br/>
                    <label htmlFor="recipes-just-for-you-setting" className="settings-label">
                        <input type="checkbox" name="recipes-just-for-you-setting" value="recipes-just-for-you-setting" id="recipes-just-for-you-setting" />
                        <strong>Recipes Just For You:</strong> Personalized recommendations based on what you love
                    </label><br/>
                    <label htmlFor="educational-content-setting" className="settings-label">
                        <input type="checkbox" name="educational-content-setting" value="educational-content-setting" id="educational-content-setting" />
                        <strong>Educational Content:</strong> Fun and educational My-Recipe created content
                    </label><br/>
                    <label htmlFor="deals-we-love-setting" className="settings-label">
                        <input type="checkbox" name="deals-we-love-setting" value="deals-we-love-setting" id="deals-we-love-setting" />
                        <strong>Deals We Love:</strong> Special deals and curated products from My-Recipe partners
                    </label><br/>
                    <label htmlFor="curated-seasonal-recipes-setting" className="settings-label">
                        <input type="checkbox" name="curated-seasonal-recipes-setting" value="curated-seasonal-recipes-setting" id="curated-seasonal-recipes-setting" />
                        <strong>Curated Seasonal Recipes</strong> Seasonal recipes that fit your personalized needs
                    </label><br/>
                    <label htmlFor="cool-my-recipe-features-setting" className="settings-label">
                        <input type="checkbox" name="cool-my-recipe-features-setting" value="cool-my-recipe-features-setting" id="cool-my-recipe-features-setting" />
                        <strong>Cool My-Recipe Features</strong> What cool new things can My-Recipe do you you now?
                    </label><br/>
                </div>
                <div className="flex-row">
                    <div className="confirm-btn">Save</div>
                    <div className="cancel-btn">Unsubscribe from all</div>
                </div>
                <br />
                <br />
                Deleting your account makes your saved recipes, collections, and personalization preferences permanently inaccessible to you. <strong>Delete Account</strong>
                <br />
                <br />
            </div>
        )
    }
}
