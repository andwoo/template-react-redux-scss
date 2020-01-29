import { ITestObject } from "../Store";

function testReducerMethod(stateTestObject : ITestObject = {name: ""}, action) {
    if(action.type == "TEST_ACTION") {
        let newObj : ITestObject = {...stateTestObject};
        newObj.name = action.name;
        return newObj;
    }
    return {...stateTestObject};
}

export default testReducerMethod;