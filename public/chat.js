let socket = io.connect('http://localhost:4000');

let message = document.getElementById("message");
let handle = document.getElementById("handle");
let btn = document.getElementById("send");
let output = document.getElementById("output");
console.log(message, handle, btn, output);

// Event emitting sending to the server
btn.addEventListener("click", function() {
	console.log("client side");
	socket.emit("chat", {
		message: message.value,
		handle: handle.value
    });
    message.value = "";
});

// Listen to the server did the sent something
socket.on("chat", function(data) {
	output.innerHTML +=
		"<p><strong>" + data.handle + ":</strong> " + data.message + "</p>";
});


