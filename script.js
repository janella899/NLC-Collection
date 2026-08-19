// NLC<script src="script.js"></script>

</body>
</html> Collection JavaScript

// Welcome message
function welcomeMessage() {
    alert("Welcome to NLC Collection! 💗");
}

// Send chat message
function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatMessages");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const newMessage = document.createElement("div");<div class="chat-box">

    <div id="chatMessages">

        <div class="message">
            Hii! How are you? 🥰
        </div>

        <div class="message you">
            I'm good! Look at our old pictures! 😂
        </div>

        <div class="message">
            HAHAHA I remember that day! 😭💗
        </div>

    </div>

    <div class="chat-input">

        <input
            type="text"
            id="messageInput"
            placeholder="Type a message..."
        >

        <button onclick="sendMessage()">
            Send
        </button>

    </div>

</div>

    newMessage.className = "message you";
    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";
}
