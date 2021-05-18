import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Company from '../pages/company'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/user" component={Home} />
                    <Route exact path="/company" component={Company} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;