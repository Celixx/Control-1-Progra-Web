$(document).ready(function() {

    $('#formulario1').validate({
        rules: {
            InputRut: {
                required: true
            },
            InputNombre: {
                required: true
            },
            InputApellidos: {
                required: true
            },
            InputCorreo: {
                required: true,
                email: true
            },
            InputDireccion: {
                required: true,
            },
            InputContraseña: {
                required: true,
                minlength: 5
            },
            InputContraseña2: {
                required: true,
                equalTo: "#InputContraseña"
            }
        },
        messages: {
            InputRut: {
                required: "El RUT es un campo obligatorio"
            },
            InputNombre: {
                required: "El nombre es un campo obligatorio"
            },
            InputApellidos: {
                required: "Los apellidos son un campo obligatorio"
            },
            InputCorreo: {
                required: "El correo es un campo obligatorio",
                email: "El correo no cumple con el formato de un correo"
            },
            InputDireccion: {
                required: "La dirección es un campo obligatorio"
            },
            InputContraseña: {
                required: "La contraseña es un campo obligatorio",
                minlength: "La longitud mínima es de 5 caracteres"
            },
            InputContraseña2: {
                required: "Verificar la contraseña es obligatorio",
                equalTo: "Las contraseñas no coinciden"
            }
        }
    });

});