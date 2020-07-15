import React from 'react';
import '../App.css';
import {Provider} from 'react-redux'
// import CartSample from './cartSample.js'
// import AntdTest from "./AntdTest";
import Hoc from "./Hoc";
// import Composition from "./composition";
// import HookTest from "./HookTest";
// import KForm from "./KForm";
// import ContextTest from "./ContextTest";
// import ReduxTest from "./ReduxTest";
// import RouterSample from "./RouterSample";
import store from "../store";

function App() {
    return (
        <div className="App">
            {/*<CartSample title='年哈哈哈'/>*/}
            {/*<AntdTest></AntdTest>*/}
            <Hoc></Hoc>
            {/*<Composition></Composition>*/}
            {/*<HookTest></HookTest>*/}
            {/*<ContextTest></ContextTest>*/}
            {/*<KForm></KForm>*/}
            {/*<RouterSample></RouterSample>*/}

            <Provider store={store}>
                {/*<ReduxTest></ReduxTest>*/}
            </Provider>
        </div>
    )
}

export default App;
