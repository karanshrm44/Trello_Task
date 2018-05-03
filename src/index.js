import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import listReducer from './reducers/reducers';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import cardReducer from './reducers/CardReducers';

let rootStore={
card:cardReducer,
list:listReducer
}

let store=createStore(combineReducers(rootStore));


ReactDOM.render(
 <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
