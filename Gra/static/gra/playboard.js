// $(document).ready(()=>{
// $('td').each(function(index){var td = $(this).click(function(){
//     console.log(this);
//     this.style.backgroundColor = "white";
//     this.children[0].style.filter = "brightness(1.0)s"
// })})})

// $(document).ready(() => {
//     $('td').each(function(index) {
//       const td = $(this);
//       td.click(() => {
//         console.log(this);
//         td.css('background-color', 'white');
//         td.children('img').css('filter', 'brightness(100%)');
//       });
//     });
//   });

$(document).ready(() => {
  let firstCard = null;
  $('td').each(function(index) {
    const td = $(this);
    td.click(() => {
      td.css('background-color', 'white');
      td.children('img').css('filter', 'brightness(100%)');

      if (!firstCard) {
        firstCard = td;
      } else {
        const firstCardName = firstCard.children('img').attr('alt');
        const secondCardName = td.children('img').attr('alt');
        if (firstCardName === secondCardName) {
          firstCard.fadeOut();
          td.fadeOut();
        } else {
          setTimeout(() => {
            firstCard.css('background-color', '');
            firstCard.children('img').css('filter', '');
            td.css('background-color', '');
            td.children('img').css('filter', '');
          }, 4000);
        }
        firstCard = null;
      }
    });
  });
});


// $(document).ready(() => {
//   let firstCard = null;
  
//   $('td').each(function() {
//     const td = $(this);
//     td.click(() => {
//       td.css('background-color', 'white');
//       td.children('img').css('filter', 'brightness(100%)');
      
//       if (firstCard == null) {
//         firstCard = td;
//       } else {
//         const firstCardName = firstCard.children('img').attr('alt');
//         const secondCardName = td.children('img').attr('alt');
        
//         if (firstCardName == secondCardName) {
//           setTimeout(() => {
//             firstCard.children('img').fadeOut();
//             td.children('img').fadeOut();
//           }, 2000);
//         } else {
//           setTimeout(() => {
//             firstCard.css('background-color', 'blue');
//             firstCard.children('img').css('filter', 'brightness(50%)');
//             td.css('background-color', 'blue');
//             td.children('img').css('filter', 'brightness(50%)');
//           }, 2000);
//         }
        
//         firstCard = null;
//       }
//     });
//   });
// });