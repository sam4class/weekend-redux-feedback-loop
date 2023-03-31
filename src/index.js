import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Reducers
const number = (state = {}, action) => {
    if (action.type === "SAVE_FEELING"){
        console.log('number', state, action.payload)
    return {...state, feeling: action.payload};

}else if(action.type === "SAVE_UNDERSTANDING"){
    return {...state, understanding: action.payload}

}else if(action.type === "SAVE_SUPPORT"){
    return {...state, support: action.payload}

}else if(action.type === "SAVE_COMMENTS"){
    return {...state, comments: action.payload}
}
return state;
}

//Store
const storeBucket = createStore(
    combineReducers({
        number,
    }),
    applyMiddleware(logger)
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeBucket}>
        <App />
        </Provider>
    </React.StrictMode>
);
