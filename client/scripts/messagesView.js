// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on( 'click', '.chat', MessagesView.handleClick);
  },

  render: function() {
    for ( var i = 0; i < 15; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    let renderedMessage = MessageView.render(message);
    var $message = $(renderedMessage);
    $message.addClass(message.username);
    MessagesView.$chats.append($message);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('poop');
  }

};