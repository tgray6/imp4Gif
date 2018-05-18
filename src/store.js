import {createStore, applyMiddleware} from 'redux'

import {impReducer} from './components/reducers/impReducer';
import thunk from 'redux-thunk';

export default createStore(impReducer,applyMiddleware(thunk));