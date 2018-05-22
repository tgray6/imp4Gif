import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
    
     <App />
    
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();


// ReactDOM.render(
//     <Provider store={store}>
//     <Router>
//         <Route path="/" component={App} />
//     </Router>
//     </Provider>,
//     document.getElementById('root')
// );


// registerServiceWorker();


