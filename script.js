document.addEventListener("DOMContentLoaded", function () {
    // Redirect after payment
    document.querySelectorAll(".payment-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Payment Successful!");
            window.location.href = "dashboard.html";
        });
    });

    // Chatbot Functionality
    let chatbotDiv = document.getElementById("chatbot");
    chatbotDiv.innerHTML = `
        <div id="chat-container">
            <h3>AI Chatbot</h3>
            <input type="text" id="user-input" placeholder="Ask something...">
            <button onclick="chat()">Send</button>
            <div id="chat-output"></div>
        </div>
    `;

    window.chat = function () {
        let userText = document.getElementById("user-input").value;
        let botReply = "I'm here to assist you!";
        document.getElementById("chat-output").innerHTML += "<p>You: " + userText + "</p>";
        document.getElementById("chat-output").innerHTML += "<p>Bot: " + botReply + "</p>";
    };
});
