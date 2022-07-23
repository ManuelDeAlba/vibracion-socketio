const socket = io();

const btnIniciar = document.getElementById('btnIniciar');
const btnCancelar = document.getElementById('btnCancelar');

let intervalo;

btnIniciar.addEventListener('click', e => {
    socket.emit("iniciar", {});
})

btnCancelar.addEventListener('click', e => {
    socket.emit("cancelar", {});
})

socket.on("iniciar", () => {
    clearInterval(intervalo);
    navigator.vibrate(10000);
    intervalo = setInterval(() => {
        navigator.vibrate(10000);
    }, 10000)
})

socket.on("cancelar", () => {
    clearInterval(intervalo);
    navigator.vibrate(0);
})