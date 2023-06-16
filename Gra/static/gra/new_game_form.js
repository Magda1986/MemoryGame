
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



 
 // $(document).ready(function() {
//     const player2Div = $('#div_player2');
//     const player2Select = $('#id_player2_select');
  
//     player2Div.hide();
  
//     player2Select.change(function(){
//       const selected = $(this).find("option:selected").attr('value'); 
//       if (selected === "player3") {
//         player2Div.hide();
//       } else {
//         player2Div.show();
//       }
//     });
//   });
