// Get elements
const chatForm = document.querySelector("#chat-form");
const chatMessage = document.querySelector("#chat-message");
const chatSend = document.querySelector("#chat-send");
const chatLogs = document.querySelector("#chatlogs");

// Send message function
chatForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get message
  const message = chatMessage.value;

  // Append message to chat logs
  appendMessage(message);

  // Clear message input
  chatMessage.value = "";
});

// Append message to chat logs
function appendMessage(message) {
  // Create new div element
  const newMessage = document.createElement("div");

  // Add class to div element
  newMessage.classList.add("message");

  // Add text to div element
  newMessage.innerText = message;

  // Append div element to chat logs
  chatLogs.appendChild(newMessage);

  // Scroll to bottom of chat logs
  chatLogs.scrollTop = chatLogs.scrollHeight;
}
// Send message function
chatForm.addEventListener("submit", e => {
    e.preventDefault();
  
    // Get message
    const message = chatMessage.value;
  
    // Append message to chat logs
    appendMessage(message);
  
    // Save messages to local storage
    saveMessages(message);
  
    // Clear message input
    chatMessage.value = "";
  });
  
  // Save messages to local storage
  function saveMessages(message) {
    // Get existing messages from local storage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Add new message to existing messages
    messages.push(message);
  
    // Save messages back to local storage
    localStorage.setItem("messages", JSON.stringify(messages));
  }
  
  // Append message to chat logs
  function appendMessage(message) {
    // Create new div element
    const newMessage = document.createElement("div");
  
    // Add class to div element
    newMessage.classList.add("message");
  
    // Add text to div element
    newMessage.innerText = message;
  
    // Append div element to chat logs
    chatLogs.appendChild(newMessage);
  
    // Scroll to bottom of chat logs
    chatLogs.scrollTop = chatLogs.scrollHeight;
  }
  
  // Load messages from local storage on page load
  window.onload = function() {
    // Get messages from local storage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Loop through messages and append to chat logs
    messages.forEach(appendMessage);
  };
  