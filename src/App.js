import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NewsContainer from "./containers/NewsContainer/NewsContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import './App.css'


function App(props) {
    return (
        <Router>
            <div className="wrapper container">
                <Navbar />
                <div className="wrapperContent">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/Login" component={LoginContainer} ></Route>
                        <Route path="/News" component={NewsContainer} ></Route>
                        <Route path="/Profile" component={ProfileContainer} ></Route>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
