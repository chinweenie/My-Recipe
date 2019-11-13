import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/main_page';
import Modal from './modal/modal';
import Profile from './profile/profile';

const App = () => (
    <div>
        <Modal/>

        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile" component={Profile} /> 
            {/* <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/register" component={SignupFormContainer}/>  */}
        </Switch>
    </div>
);

export default App;