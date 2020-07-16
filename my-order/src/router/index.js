import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from '../components/Home'

const getRouter = () => (
    <BrowserRouter>
        <Home></Home>
    </BrowserRouter>
);
export default getRouter