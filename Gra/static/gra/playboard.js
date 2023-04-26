
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

//______________________________________________________________________________________


$(document).ready(() => {
  let firstCard = null;
  let secondCard = null;

  $('td').click(function() {
    const currentCard = $(this);
    const currentImg = currentCard.children('img');
    
    if (firstCard === null) {
      // Odkrycie pierwszej karty
      currentCard.css('background-color', 'white');
      currentImg.css('filter', 'brightness(100%)');
      firstCard = currentCard;
    } else if (secondCard === null) {
      // Odkrycie drugiej karty
      const firstImg = firstCard.children('img');
      currentCard.css('background-color', 'white');
      currentImg.css('filter', 'brightness(100%)');
      secondCard = currentCard;
    
      // Sprawdzenie, czy odkryte karty są takie same
      const secondImg = secondCard.children('img');
      if (currentImg.attr('src') === secondImg.attr('src')) {
        // Odkryte karty są takie same
        setTimeout(() => {
          currentCard.css('background-color', '');
          currentImg.css('filter', '');
          secondCard.css('background-color', '');
          secondImg.css('filter', '');
          // currentImg.attr('src', '');
          // secondImg.attr('src', '');
        }, 3000);
      } else {
        // Odkryte karty są różne
        setTimeout(() => {
          currentCard.css('background-color', '');
          currentImg.css('filter', 'brightness(0%)');
          secondCard.css('background-color', '');
          secondImg.css('filter', 'brightness(0%)');
        }, 3000);
      }
      firstCard = null;
      secondCard = null;
    }
  });
});


// ---------------------0000000000000000000000000--------------------------------
// Ten poniej tez fajny:

// $(document).ready(() => {
//   let firstCard = null;
//   $('td').click(function() {
//     const currentCard = $(this);
//     const currentImg = currentCard.children('img');
    
//     if (firstCard === null) {
//       // Odkrycie pierwszej karty
//       currentCard.css('background-color', 'white');
//       currentImg.css('filter', 'brightness(100%)');
//       firstCard = currentCard;
//     } else {
//       // Odkrycie drugiej karty
//       const firstImg = firstCard.children('img');
//       currentCard.css('background-color', 'white');
//       currentImg.css('filter', 'brightness(100%)');
      
//       if (currentImg.attr('src') === firstImg.attr('src')) {
//         // Odkryte karty są takie same
//         setTimeout(() => {
//           currentCard.css('background-color', '');
//           currentImg.css('filter', '');
//           firstCard.css('background-color', '');
//           firstImg.css('filter', '');
//           currentImg.attr('src', '');
//           firstImg.attr('src', '');
//         }, 3000);
//       } else {
//         // Odkryte karty są różne
//         setTimeout(() => {
//           currentCard.css('background-color', '');
//           currentImg.css('filter', '');
//           firstCard.css('background-color', '');
//           firstImg.css('filter', '');
//         }, 3000);
//       }
//       firstCard = null;
//     }
//   });
// });


//-----------------------------------------------------------------------------------------------------------
// - to co na GIT


// $(document).ready(() => {
//   let firstCard = null;
//   let secondCard = null;
//   $('td').each(function(index) {
//     const td = $(this);
//     td.click(() => {
//       td.css('background-color', 'white');
//       td.children('img').css('filter', 'brightness(100%)');

//       if (!firstCard) {
//         firstCard = td;
//       } else {
//         const firstCardName = firstCard.children('img').attr('alt');
//         const secondCardName = td.children('img').attr('alt');
//         if (firstCardName === secondCardName) {
//           firstCard.children('img').attr('src', '');
//           firstCard.css('background-color', 'white');
//           td.children('img').attr('src', '');
//           td.css('background-color', 'white');
//         } else {
//           setTimeout(() => {
//             firstCard.css('background-color', '');
//             firstCard.children('img').css('filter', '');
//             td.css('background-color', '');
//             td.children('img').css('filter', '');
//           }, 3000);
//         }
//         firstCard = null;
//         secondCard = null;
//       }
//     });
//   });
// });



// koniec działającego kodu


