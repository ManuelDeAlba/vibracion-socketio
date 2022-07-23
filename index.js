const express = require("express");
const socketIO = require("socket.io");
const app = express();

app.set("PORT", process.env.PORT || 3000);

app.use(express.static("public"));

const server = app.listen(app.get("PORT"), () => {
    console.log(`Servidor en el puerto ${app.get("PORT")}`);
})

const io = socketIO(server);

io.on("connection", socket => {
    console.log("Usuario conectado:", socket.id);

    socket.on("iniciar", () => {
        io.emit("iniciar", {});
    })
    
    socket.on("cancelar", () => {
        io.emit("cancelar", {});
    })
})