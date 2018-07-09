import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

import reducer from "./reducers"

// logger() gibt Debug Ausgaben aus. 
// Todo: thunk
const middleware = applyMiddleware(promise(), thunk, logger());

// alle reducers werden in den Store integriert. 
let store = createStore(reducer, middleware)

export default store // createStore(reducer, middleware)