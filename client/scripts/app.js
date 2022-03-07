// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch(), 15000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      //For rooms
      for (let info in data) {
        if (data[info].roomname === null || data[info].roomname === '') {
          continue;
        } else if (data[info].roomname.includes('<script>')) {
          continue;
        } else if (!Rooms._data.includes(data[info].roomname)) {
          // console.log(data[info].roomname);
          Rooms._data.push(data[info].roomname);
          // console.log(Rooms._data);
        }
      }

      for (let info in data) {
        if (data[info].text === null || data[info].text === '') {
          continue;
        } else {
          // console.log(data[info].roomname);
          let messageData = {
            roomname: data[info].roomname,
            text: data[info].text,
            username: data[info].username,
            messageId: data[info].message_id
          };
          Messages._data.push(messageData);
        }
      }

      console.log(data);
      // console.log(data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      RoomsView.render();
      MessagesView.render();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
