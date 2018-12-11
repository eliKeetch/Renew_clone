import React, { Component } from 'react';
import App from '../App';

class Home extends Component {
    //calls the login method in the authentication service
    login = () => {
        this.props.auth.login();
    }
    // calls the logout method in auth0
    logout = () => {
        this.props.auth.logout();
    }
    render(){
        // calls the isAuthenticated method in authentication service
        const { isAuthenticated } = this.props.auth;
        return (
          <div>
            {
              isAuthenticated() &&
              <div className="container column">
                <h5>
                  You are logged in!{' '}
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={this.logout}
                  >
                    Log Out
                  </a>.
                </h5>
                <App />
              </div>
            
            }
            {
                !isAuthenticated() && (
                    <div className="container column">
                        <h5> Example</h5>
                        <h5>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login}
                            > 
                            Log in
                            </a>
                            {' '}to continue.
                        </h5>
                        <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
                    </div>
                )
            }
        </div>
        );
        }
    }
    export default Home;