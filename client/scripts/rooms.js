// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  //functionallity of the room

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  //select room method

  updateList: function() {
    //
  },

  add: function(roomname) {
    console.log(roomname);
    Rooms._data.push(roomname);
    RoomsView.renderRoom(roomname);
    //take a room name
    //send it over to the server in a specific format in ajax
    // let message = {roomname: roomname};
    // Parse.create(message);
    // RoomViews.renderRoom(roomname);
  },

  selectRoom: function() {


  }

};