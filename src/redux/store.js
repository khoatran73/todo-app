import { createStore } from "redux";
import reducer from "./reducer"
// Redux devtools extension
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancers = composeWithDevTools()

const store = createStore(reducer, composedEnhancers)

export default store