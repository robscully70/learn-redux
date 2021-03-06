var redux = require('redux');
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
var thunk = require('redux-thunk').default;

export var configure = () => {
    var reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map: mapReducer
    });
      
    var store = redux.createStore(reducer, redux.compose(
        // add middleware
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}


