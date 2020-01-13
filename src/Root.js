import React from "react";
import withRoot from "./withRoot";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Music from "./components/Music";
import Movement from "./components/Movement"

const Root = () => (
        <Router>

            <Header/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/music" component={Music}/>
                <Route path="/movement" component={Movement}/>
            </Switch>

        </ Router>
    );


export default withRoot(Root);