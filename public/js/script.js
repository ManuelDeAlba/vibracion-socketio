const socket = io();

const btnIniciar = document.getElementById('btnIniciar');
const btnCancelar = document.getElementById('btnCancelar');

btnIniciar.addEventListener('click', e => {
    socket.emit("iniciar", {});
})

btnCancelar.addEventListener('click', e => {
    socket.emit("cancelar", {});
})

socket.on("iniciar", () => {
    navigator.vibrate(Infinity);
})

socket.on("cancelar", () => {
    navigator.vibrate(0);
})