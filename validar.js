function validar(form) {
    // Función para verificar símbolos especiales
    function contieneSimbolosInvalidos(valor) {
        const simbolosInvalidos = ['<', '>', '/', '&', '"', "'", '%', '$', '#', '@', '!', '=', ';', ':', '\\'];
        for (let simbolo of simbolosInvalidos) {
            if (valor.indexOf(simbolo) !== -1) {
                return true;
            }
        }
        return false;
    }

    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "" || contieneSimbolosInvalidos(nombre)) {
        alert("Datos inválidos.");
        form.nombre.value = "";  // Borrar el input
        return false;
    }

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0 || contieneSimbolosInvalidos(edad)) {
        alert("Datos inválidos.");
        form.edad.value = "";  // Borrar el input
        return false;
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (!sexo || contieneSimbolosInvalidos(sexo)) {
        alert("Datos inválidos.");
        form.sexo.value = "";  // Borrar el input
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno" || contieneSimbolosInvalidos(deporte)) {
        alert("Datos inválidos.");
        form.deporte.value = "";  // Borrar el input
        return false;
    }

    // Si todo es válido
    return true;
}
