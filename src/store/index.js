import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {SSS_PPP_FFF_reduce} from './reducer'

const allReducers = combineReducers({SSS_PPP_FFF_reduce});

const middleware = [thunk]



// export const store = createStore(allReducers, initialState, applyMiddleware(...middleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers,  composeEnhancers(applyMiddleware(...middleware)));