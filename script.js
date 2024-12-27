const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const fileButton = document.getElementById("file-button");
const fileInput = document.getElementById("file-input");
const chatHistory = document.getElementById("chat-history");
const loginButton = document.getElementById("login-button");

// Add message to chat
function addMessage(content, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = content;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message
sendButton.addEventListener("click", () => {
  const userInput = messageInput.value.trim();
  if (userInput) {
    addMessage(userInput, "user");
    messageInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      addMessage("I'm here to help!", "bot");
    }, 1000);
  }
});

// Handle file upload
fileButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    addMessage(`Uploaded file: ${file.name}`, "user");
  }
});

// Add login functionality (demo)
loginButton.addEventListener("click", () => {
  alert("Login functionality not implemented yet!");
});

// Simulate chat history
const history = ["Chat 1", "Chat 2", "Chat 3"];
history.forEach((chat) => {
  const listItem = document.createElement("li");
  listItem.textContent = chat;
  chatHistory.appendChild(listItem);
});
