$(document).ready(function () {

    $('#myform').validate({
        rules: {
            valor: {
                required: true,
                number: true
            },
            branch: {
                required: true
            },
            cost: {
                required: true
            },
            year: {
                required: true
            },
            time: {
                required: true
            },
            when: {
                required: true
            }
        },

        messages: {
            valor: "Debe intrudicir un número",
            branch: "Este campo es requerido",
            cost: "Este campo es requerido",
            year: "Este campo es requerido",
            time: "Este campo es requerido",
            when: "Este campo es requerido"
        }
    });

});