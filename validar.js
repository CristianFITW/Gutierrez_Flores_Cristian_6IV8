function validar(form) {
    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "" || nombre.includes("<") || nombre.includes(">")) {
        alert("Datos inválidos.");
        form.nombre.value = "";  // Borrar el input
        return false;
    }

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0 || edad.includes("<") || edad.includes(">")) {
        alert("Datos inválidos.");
        form.edad.value = "";  // Borrar el input
        return false;
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (!sexo || sexo.includes("<") || sexo.includes(">")) {
        alert("Datos inválidos.");
        form.sexo.value = "";  // Borrar el input
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno" || deporte.includes("<") || deporte.includes(">")) {
        alert("Datos inválidos.");
        form.deporte.value = "";  // Borrar el input
        return false;
    }

    // Si todo es válido
    return true;
}
