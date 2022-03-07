// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  add: function(friendName) {
    Friends._data.push(friendName);

  },

  toggle: function(friendName) {
  //if _data includes friendName
    //delete the friend for _data
    //delete css properties
  //otherwise
    //send new friend to _data

  },

  areFriend: function() {

  }

};