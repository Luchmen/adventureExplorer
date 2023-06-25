document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("Nombre").value;
        var apellidos = document.getElementById("Apellidos").value;
        var correo = document.getElementById("Correo").value;
        var telefono = document.getElementById("Telefono").value;

        var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var patronSoloNumeros = /^\d+$/;

        if (nombre.length < 3 || nombre.length > 40 || nombre.trim() === '') {
            alert("El nombre debe tener entre 3 y 40 caracteres.");
            return;
        }

        if (!/^[a-zA-Z\s]*$/.test(nombre)) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }

        if (apellidos.length < 4 || apellidos.length > 60 || apellidos.trim() === '') {
            alert("Los apellidos deben tener entre 4 y 60 caracteres.");
            return;
        }

        if (!/^[a-zA-Z\s]*$/.test(apellidos)) {
            alert("Los apellidos solo pueden contener letras y espacios.");
            return;
        }

        if (!patronCorreo.test(correo) || correo.trim() === '') {
            alert("Ingrese un correo electrónico válido.");
            return;
        }

        if (telefono.length !== 9 || !patronSoloNumeros.test(telefono) || telefono.trim() === '') {
            alert("El número de teléfono debe tener 9 dígitos numéricos.");
            return;
        }

        // Si todos los campos son válidos, el formulario se envía
        form.submit();
    });
});