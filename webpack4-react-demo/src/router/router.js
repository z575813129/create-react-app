import React from 'react'

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Main from '../Index/Index'

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/page1" component={Index}/>
            </Switch>
        </div>
    </Router>
);
export default getRouter