
let botonClickeadoID;

function cambiarActivo(id) {
        // Obtener todos los botones
        const botones = document.querySelectorAll("button");
        const identificador = document.
                botonClickeadoID = id
        // Agregar la clase "active" al botón clickeado
        document.getElementById(id).classList.add("active");

        if (id == 'btnaluminio') {
                document.getElementById('aluminio').removeAttribute('hidden');
                document.getElementById('muebles').setAttribute('hidden', 'true');
                document.getElementById('madera').setAttribute('hidden', 'true');
        } else if (id == "btnmadera") {
                document.getElementById('madera').removeAttribute('hidden');
                document.getElementById('muebles').setAttribute('hidden', 'true');
                document.getElementById('aluminio').setAttribute('hidden', 'true');
        } else if (id == "btnmuebles") {
                document.getElementById('muebles').removeAttribute('hidden');
                document.getElementById('aluminio').setAttribute('hidden', 'true');
                document.getElementById('madera').setAttribute('hidden', 'true');
        }

        botones.forEach(function (otroBoton) {
                if (otroBoton.id !== id) {
                        otroBoton.classList.remove("active");
                }
        });
}

var acc = document.getElementsByClassName("drop");
var i;

for (i = 0; i < acc.length; i++) {
        console.log("Elemento seleccionado:", acc[i])
        acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                }
        });
}

document.addEventListener("DOMContentLoaded", function () {
        // evento submit 
        document.getElementById("formulario").addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("formulario").style.display = "none";

                // mostrar agradecimiento
                document.getElementById("mensaje-agradecimiento").style.display = "block";
        });
});

function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
}