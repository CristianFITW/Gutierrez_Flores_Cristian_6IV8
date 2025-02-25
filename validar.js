function eliminarTags(html) {
    return html.replace(/<[^>]*>/g, '');
}

function validar(form) {
    var nombre = form.nombre.value.trim();
    var edad = form.edad.value.trim();
    
    if (/</.test(nombre) || />/.test(nombre)) {
        alert("No se permiten etiquetas HTML o scripts en el nombre.");
        return false;
    }
    if (/</.test(edad) || />/.test(edad)) {
        alert("No se permiten etiquetas HTML o scripts en la edad.");
        return false;
    }
    
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    var sexo = form.sexo.value;
    if (!sexo) {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    return true;
}
