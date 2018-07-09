import React from "react"
import {HashRouter, Route, Link} from 'react-router-dom';

import NavigationBar from "../components/NavigationBar"

import Index from "../pages/Index"
import Initial from "../pages/Initial"
import Login from "../pages/Login"

// Require scss files
require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    render() {
        const containerStyle = {
            marginTop: "60px"
        };
        return (  
            <HashRouter>  
                <div>
                    <NavigationBar location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1>Navigation Bar</h1>
                                <Route exact path="/index" component={Index}/>
                                <Route exact path="/initial" component={Initial}/>
                                <Route exact path="/" component={Login}/>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}