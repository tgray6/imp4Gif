// import {createStore, applyMiddleware} from 'redux'

// import {impReducer} from './components/reducers/impReducer';
// import thunk from 'redux-thunk';

// export default createStore(impReducer,applyMiddleware(thunk));




import {createStore, combineReducers, applyMiddleware} from 'redux'

import {impReducer} from './components/reducers/impReducer';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';

const reducers = {
	form: formReducer,
    imp: impReducer
}

const reducer = combineReducers(reducers);

export default createStore(reducer, applyMiddleware(thunk));
