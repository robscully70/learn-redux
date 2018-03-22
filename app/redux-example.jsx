var redux = require('redux');

console.log('Starting redux example');



// Name Reducer and Action Generators
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name) => {
  return{
    type: 'CHANGE_NAME',
    name
  }
}

// Hobby Reducer and Action Generators
// ----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

var removeHobby = (id) => {
  return{
    type: 'REMOVE_HOBBY',
    id
  }
}

var addHobby = (hobby) => {
  type:'ADD_HOBBY',
  hobby
}
// Movie Reducer and Action Generators
// ----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};
var removeMovie = (id) => {
  return{
    type: 'REMOVE_MOVIE',
    id
  }
}

var addMovie = (title, genre) => {
  type:'ADD_MOVIE',
  title,
  genre
}
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Tom'));
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Andrew'
// });

store.dispatch(addHobby('Running'));
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// });
store.dispatch(addHobby('Beer'));
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Beer'
// });
store.dispatch(removeHobby(2));
// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// });
store.dispatch(changeName('Emily'));
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Emily'
// });
store.dispatch(addMovie('Mad Max', 'Action'));
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Mad Max',
//   genre: 'Action'
// });
store.dispatch(addMovie('Star Wars', 'Sci-Fi'));
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Star Wars',
//   genre: 'Sci-Fi'
// });
store.dispatch(removeMovie(1));
// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// });
