import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';  // Antd的默认样式
import getRouter from './router'

ReactDOM.render(
    getRouter(),
    document.getElementById('root')
);
