// 参考配置 https://www.cnblogs.com/zyl-Tara/p/10635033.html
// nodeJs 代码, react-app-rewired取代react-scripts, 可以扩展webpack的配置,类似vue.config.js 按需加载
// react-app-rewired2.x以后，不再支持injectBabelPlugin的方式，需要安装customize-cra。
// 具体的，ant design官方文档已经给出了最新的解决方案。请前往详览。https://ant.design/docs/react/use-with-create-react-app-cn
const {override, fixBabelImports, addDecoratorsLegacy, addWebpackAlias, addLessLoader} = require('customize-cra')
// import modifyVars from 'less-loader'
const path = require("path")
module.exports = override(
    // process.env.GENERATE_SOURCEMAP = "false",
    // 运行装饰器写法
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // 这里利用了less-loader的modifyVars来进行主题配置。当然这里的modifyVars的值也可以是一个theme文件
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: {'@primary-color': '#1DA57A'}
    // }),
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    })
)

