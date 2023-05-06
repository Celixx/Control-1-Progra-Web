$(document).ready(function() {
    $('#formulario1').validate({
        rules: {
            InputId: {
                required: true
            },
            InputRut: {
                required: true
            },
            InputNombres: {
                required: true
            },
            InputApellidos: {
                required:true
            },
            InputCorreo: {
                required: true,
                email: true
            },
            InputDireccion: {
                required: true
            },
            InputContraseña: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            InputId: {
                required: "El ID es un campo obligatorio"
            },
            InputRut: {
                required: "El RUT es un campo obligatorio"
            },
            InputNombres: {
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
            }
        }

    });

});