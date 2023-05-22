$(document).ready(() => {
  let firstCard = null;
  let secondCard = null;
  let pairsFound = 0; // let - zmienna, która zmienia się w trakcie trwania rozgrywki
  let moves = 0; //Licznik ruchow
  let csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
  const movesDisplay = $('#moves-count'); // zmienn movesDisplay, przechowuje referencję do elementu HTML o identyfikatorze moves-count
  const pairsTotal = parseInt($('#pairs-count').text()); //const - constans - zmienna, ktora sie nie zmienia w trakcie trwania rozgrywki
  console.log(moves);


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
        moves++;

        $.ajax({
          url: 'moves/',
          type: 'POST',
          headers: {
            'X-CSRFToken': csrf_token
          },
          data: {
            'moves': moves,
          },
          dataType: 'json',
          success: function(response) {
            movesDisplay.text(response.moves);
          },
          error: function(xhr, status, error) {
            console.log('Wystąpił błąd:', error);
          }
        });

        if (currentImg.attr('src') === firstImg.attr('src')) {
          // Karty takie same
          currentImg.css('filter', 'brightness(50%)');
          currentCard.css('background-color', 'grey')
          firstImg.css('filter', 'brightness(50%)');
          firstCard.css('background-color', 'grey')
          // moves ++; //rownowazne  +=1
          console.log(moves); // wyswietlatnie wartości zmiennej moves na konsoli przeglądarki po każdym zwiększeniu
          movesDisplay.text(moves);
          pairsFound++; //rownowazne  +=1
          firstCard = null;
          secondCard = null;
          
          if (pairsFound === pairsTotal) {
            const endGameMessage = document.getElementById('end-game-message');
            endGameMessage.textContent = 'Brawo! To już koniec gry!';
          }
         
          //$('td.locked').removeClass('locked');
        } 
        else {
          // Karty różne
          setTimeout(() => {
            currentCard.css('background-color', 'black');
            currentImg.css('filter', 'brightness(0%)');
            firstCard.css('background-color', 'black');
            firstImg.css('filter', 'brightness(0%)');
            firstCard = null;
            secondCard = null;
            // moves++; //rownowazne moves =+1
            console.log(moves); // wyswietlatnie wartości zmiennej moves na konsoli przeglądarki po każdym zwiększeniu
            movesDisplay.text(moves);
            $('td.locked').removeClass('locked');
          }, 2000);
        }
      }
    }
  });
});

