// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('div #rooms'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    RoomsView.$button.on( 'click', null, RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function() {
    Rooms._data.forEach((roomName) => this.renderRoom(roomName));
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    var $roomName = $('<option></option>').attr('value', roomname).text(roomname);
    this.$select.append($roomName);

    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    var optionSelect = $('option:selected', this)[0].outerText;
    console.log($('option:selected', this));
    console.log(optionSelect);
    //-Handle a user selecting a different room.

    // we want to display only messages from the selected room
    // TBD after we do the messages
    // need to get rid of all messages

    //come back when messages are done.
    //I - Event Data
    //O - none
    //C - none
    //E - none

    //Psuedocode
    //clear the chat, making the chat equal an empty string
    $('#chats').html('');

    //itertate the Messages._data
    //if the roomname of the current object is equal to the input roomname
    //send current object to MessagesView.renderMessage
    for ( var i = 0; i < Messages._data.length; i++) {
      if (optionSelect === Messages._data[i].roomname) {
        MessagesView.renderMessage(Messages._data[i]);
      }
    }
    // TODO: Handle a user selecting a different room.
    console.log('wow, much fun');
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //invoke the add room function

    //Create the textfield
    var $textField = $('<input class="input-room" type="text" name="roomname">');

    // If the textfield doesn't exist
    if (!RoomsView.$rooms[0].childNodes[5]) {
      RoomsView.$rooms.append($textField);
    }

    RoomsView.$button.on( 'click', null, function(event) {
      Rooms.add($textField.val());
      $('.input-room').remove();
    });

    //When we submit a roomname, we invoke add() from Rooms.js
    $textField.on('keypress', null, function(event) {
      if (event.originalEvent.code === 'Enter') {
        Rooms.add($textField.val());
        $('.input-room').remove();
      }
    });
  }

};

