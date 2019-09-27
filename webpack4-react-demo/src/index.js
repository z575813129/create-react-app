import './css/style.css'
import './less/style.less'
// import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'

import getRouter from './router/router'

ReactDom.render(
    getRouter(),
    document.getElementById('root'))
//  在入口文件index.js
// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
    // 实现热更新
    module.hot.accept()
}