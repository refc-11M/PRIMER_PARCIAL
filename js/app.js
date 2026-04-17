
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
boton.addEventListener("click", () => {
console.log("Entrando a: " + boton.textContent);
});
});
