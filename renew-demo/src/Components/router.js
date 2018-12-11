import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link,  Router, Switch } from 'react-router-dom';

import App from '../App';
import Staff from './Staff';
import Electronics from './Electronics';
import Notfound from './notfound'
import Home from './Home';
import Callback from './Callback';
import Auth from './auth';
import history from './history';



    const auth = new Auth();

    const handleAuthentication = (nextState, replace) => {
        if (/access_token|id_token|error/.test(nextState.location.hash)){
            auth.handleAuthentication();
        }
    }
    

    const Routes = () => (
        <Router history={history} component={Home}>
            <div>
                
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            
                <Switch>
                    <Route exact path="/" component ={App}></Route> 
                    <Route path="/electronics" component={Electronics} />
                    <Route path="/staff/:id" component ={Staff}></Route>
                    <Route component={Notfound} />
                </Switch>
            </div>
        </Router>
    );
    export default Routes;