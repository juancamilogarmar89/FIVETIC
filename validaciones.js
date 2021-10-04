//Nombre:Juan Camilo Garcia Marin grupo: 53629  jornada: nocturno 
function validar_nombre_usuario (string){
    valnombre= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+\S$/ // Letras y espacios, pueden llevar acentos.
    if(!valnombre.test(string)){
    return false;
    //warning += "El Nombre no es valido <br>"
} else{
    return true;
}
}

function validar_edad_usuario (edad){
    valedad= /^\d{1,3}$/ // 1 a 3 numeros.
    if(!valedad.test(edad)&&edad<13&&edad>110){
        return false;
        //warning += "La edad no es valida <br>"
    }   else{
        return true;
    }
}

function validar_contrasena(string){
    valpassword =/^[a-zA-Z0-9]{6,36}$/ // 4 a 36 digitos.
    if(!valpassword.test(string)){
        return false;
        //warning += "El password no es valido <br>"
    }   else{
        return true;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.validar_edad_usuario=validar_edad_usuario;
