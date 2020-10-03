$(document).ready(function(){
    $('#carrera').on('change', function(){
        console.log($(this).find(":selected").val());
    });
});