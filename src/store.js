import {createStore} from 'redux'

import {impReducer} from './reducers/impReducer';

export default createStore(impReducer);