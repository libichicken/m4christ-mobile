import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";

import Home from './components/Home';
import NotFound from './components/NotFound';
import Appbar from "./components/Appbar";


const Routes = () => (
    <Router>
        <div>
            <Appbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;