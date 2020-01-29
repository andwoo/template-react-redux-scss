import { createStore, applyMiddleware, compose } from "redux";
import CombinedReducers from "./reducers/index";

export interface ITestObject {
    name : string
}

export interface IStoreDispatch {
    TestAction(name : string);
}

export interface IStoreModel {
    testObject : ITestObject;
}

//combined interface for easy include in React Components
export interface IStore extends IStoreDispatch, IStoreModel {

}

const defaultModel : IStoreModel = {
    testObject: {
        name: ""
    }
};

const enhancers = compose(
    window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
);

const store = createStore(CombinedReducers, defaultModel, enhancers);

if(module["hot"]) {
    module["hot"].accept("./reducers", () => {
        const nextRootReducer = require("./reducers/index").default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;