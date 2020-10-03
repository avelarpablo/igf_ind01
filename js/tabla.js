$(document).ready(function(){
    // Acción para botones de editar
    $('.btn-editar').on('click', function(){
        console.log($(this).attr('data-id-estudiante'));
    });

    // Acción para botones de eliminar
    $('.btn-eliminar').on('click', function(){
        $(this).closest('tr').hide();
    });

    // Acción para botón nuevo registro
    $('#btnNuevoRegistro').on('click', function(){
        location.href = $(this).attr('data-url-formulario');
    });
});
