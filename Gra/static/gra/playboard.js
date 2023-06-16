
$(document).ready(() => {
  let firstCard = null;
  let secondCard = null;
  let pairsFound = 0; // let - zmienna, która zmienia się w trakcie trwania rozgrywki
  let moves = 0; //Licznik ruchow
  let csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
  let scoreplayer1 = $('#scoreplayer1').text();
  let scoreplayer2 = $('#scoreplayer2').text();
  let currentPlayer = $('#player1').text();
  let winner = null;
  const movesDisplay = $('#moves-count'); // zmienn movesDisplay, przechowuje referencję do elementu HTML o identyfikatorze moves-count
  const pairsTotal = parseInt($('#pairs-count').text()); //const - constans - zmienna, ktora sie nie zmienia w trakcie trwania rozgrywki
  const player1 = $('#player1');
  const player2 = $('#player2');

  player1.addClass('active');
  // player2.removeClass('active');

  $('td').click(function () {
    console.log('clicked!')
    const currentCard = $(this);
    const currentImg = currentCard.children('img')

    console.log(JSON.stringify(currentCard, null, 2))
    console.log(currentCard)

    if (!currentCard.hasClass('locked')) {
      if (firstCard === null) {
        // Odkrycie pierwszej karty
        currentCard.addClass('temporaryvisible');
        firstCard = currentCard;
        currentCard.addClass('locked');
      } else if (secondCard === null) {
        // Odkrycie drugiej karty
        const firstImg = firstCard.children('img');
        currentCard.addClass('temporaryvisible');
        secondCard = currentCard;
        currentCard.addClass('locked');
        moves++;


        if (currentImg.attr('src') === firstImg.attr('src')) {
          // Karty takie same
          currentCard.addClass('found')
          console.log(moves); // wyswietlatnie wartości zmiennej moves na konsoli przeglądarki po każdym zwiększeniu
          movesDisplay.text(moves);
          pairsFound++; //rownowazne  +=1
          firstCard = null;
          secondCard = null;

          if (currentPlayer === player1.text()) {
            scoreplayer1++;
            $('#scoreplayer1').text(scoreplayer1);
          } else if (currentPlayer === player2.text()) {
            scoreplayer2++;
            $('#scoreplayer2').text(scoreplayer2);
          }


          if (pairsFound === pairsTotal) {
            const endGameMessage = document.getElementById('end-game-message');
            if (scoreplayer1 > scoreplayer2) {
              endGameMessage.textContent = 'Brawo! Wygrał Gracz 1!';
              winner = player1.text();
            } else if (scoreplayer2 > scoreplayer1) {
              endGameMessage.textContent = 'Brawo! Wygrał Gracz 2!';
              winner = player2.text();
            } else {
              endGameMessage.textContent = 'Brawo! Ale to były emocje! Remis!';
              winner = "remis";

            }

          }
          // $('td.locked').removeClass('locked');
        }
        else {
          // Karty różne
          setTimeout(() => {
            currentCard.removeClass('temporaryvisible');
            firstCard.removeClass('temporaryvisible');
            currentCard.addClass('notfound');
            firstCard.addClass('notfound');
            firstCard = null;
            secondCard = null;
            // moves++; //rownowazne moves =+1
            console.log(moves); // wyswietlatnie wartości zmiennej moves na konsoli przeglądarki po każdym zwiększeniu
            movesDisplay.text(moves);
            $('td.locked').removeClass('locked');

            if (currentPlayer === player1.text()) {
              currentPlayer = player2.text();
              player1.removeClass('active');
              player2.addClass('active');
            } else if (currentPlayer === player2.text()) {
              currentPlayer = player1.text();
              player1.addClass('active');
              player2.removeClass('active');
            }

          }, 2000);
        }
        $.ajax({
          url: 'moves/',
          type: 'POST',
          headers: {
            'X-CSRFToken': csrf_token
          },
          data: {
            'moves': moves,
            'winner': winner,
            'scoreplayer1': scoreplayer1,
            'scoreplayer2': scoreplayer2,
          },
          dataType: 'json',
          success: function (response) {
            movesDisplay.text(response.moves);
          },
          error: function (xhr, status, error) {
            console.log('Wystąpił błąd:', error);
          }
        });
      }
    }
  });
});

