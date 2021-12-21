import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingReducer from './reducers/greetingReducer';

const store = createStore(greetingReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
