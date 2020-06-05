// @ts-nocheck
import { Plugin } from 'D:/coding/github/create-react-app/umi-test/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('D:/coding/github/create-react-app/umi-test/src/app.js'),
  path: 'D:/coding/github/create-react-app/umi-test/src/app.js',
});
plugin.register({
  apply: require('D:/coding/github/create-react-app/umi-test/src/.umi/plugin-dva/runtime.tsx'),
  path: 'D:/coding/github/create-react-app/umi-test/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
