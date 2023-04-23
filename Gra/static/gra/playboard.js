// $(document).ready(()=>{
// $('td').each(function(index){var td = $(this).click(function(){
//     console.log(this);
//     this.style.backgroundColor = "white";
//     this.children[0].style.filter = "brightness(1.0)s"
// })})})

$(document).ready(() => {
    $('td').each(function(index) {
      const td = $(this);
      td.click(() => {
        console.log(this);
        td.css('background-color', 'white');
        td.children('img').css('filter', 'brightness(100%)');
      });
    });
  });