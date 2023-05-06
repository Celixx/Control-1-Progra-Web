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


$(document).ready(function() {
    $('#formulario2').validate({
        rules: {
            InputCorreo:{
                required: true,
                email: true
            },
            InputClave:{
                required: true,
                minlength: 5
            }
        },
        messages:{
            InputCorreo:{
                required: "El correo es un campo obligatorio",
                email: "El correo no cumple con el formato de un correo"
            },
            InputClave:{
                required: "La contraseña es un campo obligatorio",
                minlength: "La longitud mínima es de 5 caracteres"
            }
        }
    });

});

$(document).ready(function(){
    $('#formulario3').validate({
        rules: {
            InputId:{
                required: true,
                email: false
            },
            InputPrecio:{
                required: true,
                email: false
            },
            select:{
                required: true
            }
        },
        messages: {
            InputId:{
                required: "La id es un campo obligatorio"
            },
            InputPrecio:{
                required: "El precio es un campo obligatorio"
            },
            select:{
                required: "Debe seleccionar una categoria"
            }
        }
    });
});