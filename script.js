// Pantalla de error: se quita al hacer clic
var botonRecuperar = document.getElementById("boton-recuperar");
var pantallaError = document.getElementById("pantalla-error");

if (botonRecuperar) {
    botonRecuperar.onclick = function () {
        pantallaError.style.display = "none";
        alert("Sistema recuperado");
    };
}

// Easter egg: clic en el titulo
var titulo = document.querySelector("h1");
var secreto = document.getElementById("mensaje-secreto");

titulo.onclick = function () {
    secreto.style.display = "block";
};

// Formulario de contacto
var formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.onsubmit = function (e) {
        e.preventDefault();
        alert("Mensaje enviado (es solo una prueba)");
        formulario.reset();
    };
}
