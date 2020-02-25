const express = require("express");
const app = express();
const socket = require("socket.io");

let server = app.listen(4000, () => {
	console.log("Server is started at port 4000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", function(socket) {
	console.log("Successfully connected to client");
});
