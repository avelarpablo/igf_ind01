$(document).ready(function(){
    // Acción para botones de editar
    $('.btn-editar').on('click', function(){
        console.log($(this).attr('data-id-estudiante'));
    });
});
