var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();;

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  //console.log('New state', store.getState());
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = '...Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View Your Location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());


store.dispatch(actions.changeName('Tom'));
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Andrew'
// });

store.dispatch(actions.addHobby('Running'));
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// });
store.dispatch(actions.addHobby('Beer'));
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Beer'
// });
store.dispatch(actions.removeHobby(2));
// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// });
store.dispatch(actions.changeName('Emily'));
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Emily'
// });
store.dispatch(actions.addMovie('Mad Max', 'Action'));
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Mad Max',
//   genre: 'Action'
// });
store.dispatch(actions.addMovie('Star Wars', 'Sci-Fi'));
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Star Wars',
//   genre: 'Sci-Fi'
// });
store.dispatch(actions.removeMovie(1));
// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// });
