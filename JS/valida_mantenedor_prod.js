$(document).ready(function() {
    $('#formulario').validate({
        rules: {
            InputCant:{
                required: true
            }
        },
        messages:{
            InputCant:{
                required: "La cantidad es un campo obligatorio",
                
            }
        }
    });

});