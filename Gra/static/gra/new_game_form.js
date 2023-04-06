$(document).ready(function() {  
    $('#id_player2_select').change(function(){
        alert( $(this).find("option:selected").attr('value') );    
        if ($(this).find("option:selected").attr('value')==="player3"){$('#id_player2').show()}
        else $('#id_player2').hide()  
    });
 });