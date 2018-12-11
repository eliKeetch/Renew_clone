import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import logo from '../Renew-images/rar_logo_primary_lg_white2.png';
import '../css/shop-homepage.css';

class Staff extends Component {
    render() {
      const { params } = this.props.match;
      return (
            <div>
            <h1> Staff Page</h1>
            <p>{params.id}</p>
            </div>
      );
    };
    
};




export default Staff;