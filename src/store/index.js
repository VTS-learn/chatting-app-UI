import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {specefic_reply_reduce , responsive_ui , responsive_ui_userList, responsive_ui_chatArea} from './reducer';

const allReducers = combineReducers({specefic_reply_reduce , responsive_ui , responsive_ui_userList, responsive_ui_chatArea});

const middleware = [thunk]



// export const store = createStore(allReducers, initialState, applyMiddleware(...middleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers,  composeEnhancers(applyMiddleware(...middleware)));