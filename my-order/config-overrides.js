// nodeJs 代码, react-app-rewired取代react-scripts, 可以扩展webpack的配置,类似vue.config.js 按需加载
const {injectBabelPlugin} = require("react-app-rewired")
module.exports = function override(config, env) {
    config = injectBabelPlugin(
        // 在默认配置基础上注入
        // 插件名 插件配置
        ['import', {libraryName: "antd", libraryDirectory: 'es', style: "css"}],
        config
    );
    // 将装饰器转换成ES5语法
    config = injectBabelPlugin(
        ["@babel/plugin-proposal-decorators", {legacy: true}],
        config
    )

    return config;
};