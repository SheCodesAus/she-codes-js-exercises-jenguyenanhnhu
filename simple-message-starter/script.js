window.onload = function() {
    let speechBubble = document.createElement("div")
    speechBubble.classList.add('speech-bubble')
    let Box = document.createElement("p")
    Box.innerText = "..."
    Box.id = "message-box"
    speechBubble.appendChild(Box)

    let bubblez = document.getElementById("output")
    bubblez.appendChild(speechBubble)
}

function showMessage() {
    let message = document.getElementById('message-text').value
    let messageBox = document.getElementById('message-box')
    messageBox.innerHTML = message
}