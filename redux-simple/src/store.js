import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { default as thunk } from "redux-thunk"; // Use named import for redux-thunk
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
