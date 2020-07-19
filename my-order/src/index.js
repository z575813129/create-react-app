import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';  // Antd的默认样式
import getRoute from './router'

ReactDOM.render(
    getRoute(),
    document.getElementById('root')
);
