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
    const memoryInput = document.getElementById("memoryInput");
const memoryGallery = document.getElementById("memoryGallery");

memoryInput.addEventListener("change", function () {

    const files = memoryInput.files;

    for (const file of files) {

        const memoryCard = document.createElement("div");
        memoryCard.className = "memory-card";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️ Remove";

        deleteButton.onclick = function () {
            memoryCard.remove();
        };

        if (file.type.startsWith("image/")) {

            const image = document.createElement("img");

            image.src = URL.createObjectURL(file);
            image.alt = "NLC Collection Memory";

            memoryCard.appendChild(image);

        } else if (file.type.startsWith("video/")) {

            const video = document.createElement("video");

            video.src = URL.createObjectURL(file);
            video.controls = true;

            memoryCard.appendChild(video);
        }

        memoryCard.appendChild(deleteButton);
        memoryGallery.appendChild(memoryCard);
    }

    memoryInput.value = "";
});
}
