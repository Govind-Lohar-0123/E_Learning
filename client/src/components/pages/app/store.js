

import rootReducers from "../Redux/rootReducers";
import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux"



const store = createStore(rootReducers,applyMiddleware(thunk));
 


export default store;