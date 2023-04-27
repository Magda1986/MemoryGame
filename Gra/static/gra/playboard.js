


// --------------------- setne podejście do problemy poniej --------------------------------


$(document).ready(() => {
  let firstCard = null;
  let secondCard = null;

  $('td').click(function() {
    const currentCard = $(this);
    const currentImg = currentCard.children('img');

    if (!currentCard.hasClass('locked')) {
      if (firstCard === null) {
        // Odkrycie pierwszej karty
        currentCard.css('background-color', 'white');
        currentImg.css('filter', 'brightness(100%)');
        firstCard = currentCard;
        currentCard.addClass('locked');
      } else if (secondCard === null) {
        // Odkrycie drugiej karty
        const firstImg = firstCard.children('img');
        currentCard.css('background-color', 'white');
        currentImg.css('filter', 'brightness(100%)');
        secondCard = currentCard;
        currentCard.addClass('locked');

        if (currentImg.attr('src') === firstImg.attr('src')) {
          // Karty takie same
          currentImg.css('filter', 'brightness(50%)');
          currentCard.css('background-color', 'grey')
          firstImg.css('filter', 'brightness(50%)');
          firstCard.css('background-color', 'grey')

          firstCard = null;
          secondCard = null;
          //$('td.locked').removeClass('locked');
        } else {
          // Karty różne
          setTimeout(() => {
            currentCard.css('background-color', 'black');
            currentImg.css('filter', 'brightness(0%)');
            firstCard.css('background-color', 'black');
            firstImg.css('filter', 'brightness(0%)');
            firstCard = null;
            secondCard = null;
            $('td.locked').removeClass('locked');
          }, 2000);
        }
      }
    }
  });
});


__________________________________________________________________________________
//to prawie to o co mi chodzi

// $(document).ready(() => {
//   let firstCard = null;
//   let secondCard = null;
//   let isChecking = false;

//   $('td').click(function() {
//     if (isChecking) {
//       return;
//     }
    
//     const currentCard = $(this);
//     const currentImg = currentCard.children('img');

//     if (firstCard === null) {
//       // Odkrycie pierwszej karty
//       currentCard.css('background-color', 'white');
//       currentImg.css('filter', 'brightness(100%)');
//       firstCard = currentCard;
//     } else if (secondCard === null) {
//       // Odkrycie drugiej karty
//       const firstImg = firstCard.children('img');
//       currentCard.css('background-color', 'white');
//       currentImg.css('filter', 'brightness(100%)');
//       secondCard = currentCard;

//       // Blokowanie kliknięć na kartach podczas sprawdzania, czy dwie karty są takie same
//       isChecking = true;

//       // Sprawdzenie, czy dwie karty są takie same
//       if (currentImg.attr('src') === firstImg.attr('src')) {
//         // Karty są takie same
//         setTimeout(() => {
//           currentCard.css('background-color', 'black');
//           firstCard.css('background-color', 'black');
//           currentImg.css('filter', 'brightness(0%)');
//           firstImg.css('filter', 'brightness(0%)');
//           firstCard = null;
//           secondCard = null;

//           // Odblokowanie kliknięć na kartach
//           isChecking = false;
//         }, 2000);
//       } else {
//         // Karty nie są takie same
//         setTimeout(() => {
//           currentCard.css('background-color', 'black');
//           firstCard.css('background-color', 'black');
//           currentImg.css('filter', 'brightness(0%)');
//           firstImg.css('filter', 'brightness(0%)');
//           firstCard = null;
//           secondCard = null;

//           // Odblokowanie kliknięć na kartach
//           isChecking = false;
//         }, 2000);
//       }
//     }
//   });
// });