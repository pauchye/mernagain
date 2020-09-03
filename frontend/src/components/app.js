import React from 'react';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import MainPage from './main/main_page';
import Dash from '../components/dash/dash_container'


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            {/* <Route exact path="/" component={ArtworkIndex} /> */}
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/dash" component={Dash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <Route exact path="/:artworkId" component={RouteShow} /> */}
        </Switch>
    </div>
);

export default App;