import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';  // Antd的默认样式
import getRoute from './router'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    {getRoute()}
  </Provider>,
  document.getElementById('root'))
// redux 使用，每次状态跟新都需要订阅，每个组件都得导入store，所以跟react不是很搭，然后就诞生了react-redux
// store.subscribe(() =>
//   ReactDOM.render(getRoute(), document.getElementById('root'))
// )
