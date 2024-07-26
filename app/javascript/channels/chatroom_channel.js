import consumer from "channels/consumer"

document.addEventListener('turbolinks:load', () => {
  const chatroomElement = document.getElementById('chatroom-id');
  const chatroomId = chatroomElement.getAttribute('data-chatroom-id');

  consumer.subscriptions.create({ channel: "ChatroomChannel", chatroom_id: chatroomId }, {
    connected() {
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      const messagesContainer = document.getElementById('messages');
      messagesContainer.insertAdjacentHTML('beforeend', data.message);
    }
  });
  
})

