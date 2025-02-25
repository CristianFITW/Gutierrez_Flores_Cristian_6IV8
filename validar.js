function eliminarScripts(html) {
    return html.replace(/[<>]/gi, '');
}

function validar(form) {
    // Eliminar posibles etiquetas <script> de los valores del formulario
    form.nombre.value = eliminarScripts(form.nombre.value);
    form.edad.value = eliminarScripts(form.edad.value);
    
    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (!sexo) {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Si todo es válido
    return true;
}
