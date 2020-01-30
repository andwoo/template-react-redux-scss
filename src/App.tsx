import * as React from "react";
import { hot } from "react-hot-loader";

import { IStore } from "./redux/Store";

class App extends React.Component<IStore> {

    onClickButton() {
        this.props.TestAction("NEW CONTENT");
    }

    render() {
        return (
            <div>
                <p>Howdy Yall!</p>
                <p>{this.props.testObject.name}</p>
                <button className="button" onClick={() => this.onClickButton()}>Click this</button>
            </div>
        );
    }
}

export default hot(module)(App)