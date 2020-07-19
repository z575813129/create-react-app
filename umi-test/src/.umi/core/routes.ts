// @ts-nocheck
import { ApplyPluginsType } from 'D:/coding/github/create-react-app/umi-test/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/login",
    "component": require('D:/coding/github/create-react-app/umi-test/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('D:/coding/github/create-react-app/umi-test/src/layouts').default,
    "routes": [
      {
        "path": "/",
        "component": require('D:/coding/github/create-react-app/umi-test/src/pages/goods/index').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('D:/coding/github/create-react-app/umi-test/src/pages/about').default,
        "Routes": [
          "./router/PrivateRoute.js"
        ],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('D:/coding/github/create-react-app/umi-test/src/pages/users/_layout').default,
        "routes": [
          {
            "path": "/users/",
            "component": require('D:/coding/github/create-react-app/umi-test/src/pages/users/index').default,
            "exact": true
          },
          {
            "path": "/users/:id",
            "component": require('D:/coding/github/create-react-app/umi-test/src/pages/users/$id').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('D:/coding/github/create-react-app/umi-test/src/pages/404').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
