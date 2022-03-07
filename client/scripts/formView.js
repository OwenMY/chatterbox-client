// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // FormView.setStatus(true);
    App.stopSpinner();
  },

  handleSubmit: function(event) {
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    // Stop the browser from submitting the form
    event.preventDefault();

    let currentUser = window.App.username;
    let inputMessage = $('#message')[0].value;
    let room = $('option:selected')[0].innerText;

    let message = {
      roomname: room,
      text: inputMessage,
      username: currentUser
    };

    Parse.create(message);
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};