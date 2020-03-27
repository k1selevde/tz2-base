import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from "redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers/rootReducer";


const store = createStore(rootReducer, (localStorage.getItem('redux-store')) ? JSON.parse(localStorage['redux-store']) : {} , compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


store.subscribe(() => {
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
})

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
