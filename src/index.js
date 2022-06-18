import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// reducer for feedback data in db
const feedback = (state = [], action) => {
    switch (action.type) {
      case "GET_FEEDBACK":
        return action.payload;
    }
    return state;
};

// reducer for feedback feeling
const feeling = (state = [], action) => {
    switch (action.type) {
      case "FEELING":
        console.log(action.payload);
        return action.payload;
    }
    return state;
};

// reducer for comprehension
const comprehension = (state = [], action) => {
    switch (action.type) {
      case "COMPREHENSION":
        return action.payload;
    }
    return state;
};

// reducer for support
const support = (state = [], action) => {
    switch (action.type) {
      case "SUPPORT":
        return action.payload;
    }
    return state;
};

// reducer for comments
const comments = (state = [], action) => {
    switch (action.type) {
      case "COMMENTS":
        return action.payload;
    }
    return state;
};

// redux store
const store = createStore(
    combineReducers({
        feedback,
        feeling,
        comprehension,
        support,
        comments
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker() ;
