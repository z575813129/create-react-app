import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../pages/Home"
import Page1 from '../pages/Page1'
import Item from '../pages/Item'
import NoMatch from '../components/NoMatch'

const getRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/item" component={Item}/>
            {/*404没有path, 必然匹配*/}
            <Route component={NoMatch}></Route>
        </Switch>
    </BrowserRouter>
);
export default getRoute;