
 $(document).ready(function() {
    $('#div_player2').hide();
    
    $('#id_player2_select').change(function(){
        var selected = $(this).find("option:selected").attr('value'); 
        
        if (selected === "player1") {
            $('#div_player2').hide();
        } else {
            $('#div_player2').show();
        }
    });
});

