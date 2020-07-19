import Home from "../pages/Home"
import Page1 from '../pages/Page1'
import Item from '../pages/Item'

const routes = [
    {
        path: '/',
        component: Home,
        name: "home"
    },
    {
        path: '/item',
        component: Item,
        name: "Item"
    },
    {
        path: '/page1',//默认首加
        component: Page1,
        name: "Page1"
    },
];
export {routes}