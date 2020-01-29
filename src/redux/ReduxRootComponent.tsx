import * as React from "react";
import { bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";

//store
import store, { IStoreDispatch, IStoreModel } from "./Store";
//actions
import * as TestActions from "./actions/TestAction";

import App from "../App";

function MapStateToProps(state : IStoreModel) : IStoreModel {
    return {
        testObject: state.testObject
    };
}

function MapDispatchToProps(dispatch) : IStoreDispatch {
    return bindActionCreators({...TestActions}, dispatch);
}

var ReduxPropsBinder = connect(MapStateToProps, MapDispatchToProps)(App);

export default class ReduxRootComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxPropsBinder/>
            </Provider>
        );
    }
}