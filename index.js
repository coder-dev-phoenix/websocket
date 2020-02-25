const express = require("express");
const app = express();
const socket = require("socket.io");

let server = app.listen(4000, () => {
	console.log("Server is started at port 4000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", function(socket) {
	console.log("Successfully connected to client", socket.id);

	// checking the client did the sent something if yes then it will sent to
	// all socket means client
	socket.on("chat", function(data) {
        console.log("server side");
		io.emit("chat", data);
	});
});

