$(document).ready(function() { 
    $('#div_player2').hide();
    $('#id_player2_select').change(function(){
        var selected = $(this).find("option:selected").attr('value'); 
        // alert(selected);
        // alert(selected==="player3");
        if (selected==="player3"){
            $('#div_player2').hide()
        } else {
            $('#div_player2').show()
        }
    });
 });

