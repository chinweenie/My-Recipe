import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProfileMain from './profile-main';
import Preferences from './preferences';
import Settings from './settings'

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
        let inputs = document.getElementsByName("address");
        if(!inputs || inputs.length < 1)
            return;
        for(let i = 0; i < 3; i++){
            inputs[i].size = Math.min(inputs[i].id.length || inputs[i].value.length);
        }
        if (e.target.tagName === "INPUT" && e.target.name === "address")
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
                                    <input onClick={e => this.clickAddress(e)} size="4" placeholder="City" name="address" id="city" />,
                                    <input onClick={e => this.clickAddress(e)} size="5" placeholder="State" name="address" id="state"/>,
                                    <input onClick={e => this.clickAddress(e)} size="7" placeholder="Country" name="address" id="country"/>
                                </div>
                            </div>
                        </div>
                       
                </div>
                <div className="profile-tabs">
                    <Link to="/profile/userid">SAVED RECIPES</Link>
                    <Link to="/profile/settings/preferences">PREFERENCES</Link>
                    <Link to="/profile/settings">SETTINGS</Link>
                </div>
                <Switch>
                    <Route exact path="/profile/settings/preferences" component={Preferences} />
                    <Route exact path="/profile/settings" component={Settings} />
                    <Route path="/profile" component={ProfileMain} />
                </Switch>
            </div>
        )
    }
}
