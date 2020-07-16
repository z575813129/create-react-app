export default {
    // plugins: [
    // [
    //   "umi-plugin-react",
    //   {
    //     antd: true,
    //     dva: true
    //   }
    // ]
    // ],
    dva: {},
    antd: {},
    routes: [
        {path: "/login", component: "./login"},
        {
            path: "/",
            component: "../layouts",
            routes: [
                // { path: "/", component: "./index" },
                {path: "/", component: "./goods/index"},
                {
                    path: "/about",
                    component: "./about",
                    Routes: ["./router/PrivateRoute.js"]
                },
                {
                    path: "/users",
                    component: "./users/_layout",
                    routes: [
                        {path: "/users/", component: "./users/index"},
                        {path: "/users/:id", component: "./users/$id"}
                    ]
                },
                {
                    component: "./404"
                }
            ]
        }
    ]
};
