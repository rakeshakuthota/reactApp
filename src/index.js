import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterState from './store/reducers/counter';
import resultsState from './store/reducers/results';
import {Provider} from 'react-redux';
const rootReducer=combineReducers({
    ctr:counterState,
    res:resultsState
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
