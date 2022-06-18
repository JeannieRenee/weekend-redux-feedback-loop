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
      case "FEEDBACK":
        return action.payload;
    }
    return state;
};

// reducer for feedback feeling
const feeling = (state = [], action) => {
    switch (action.type) {
      case "FEELING":
        return action.payload;
    }
    return state;
};

// reducer for understanding
const understanding = (state = [], action) => {
    switch (action.type) {
      case "UNDERSTANDING":
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
        understanding,
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
