function buildPlayboardJson() {
  var playboard = [];
  var rowArray = [];

  $("table tr").each(function () {
    var row = $(this);

    row.find("td").each(function () {
      var cell = $(this);
      var card = {};

      // Extract the card number from the image src attribute
      var src = cell.find("img").attr("src");
      if (src) {
        var matches = src.match(/(\d+)\.jpeg$/);
        if (matches) {
          card.card = parseInt(matches[1], 10);
        }
      }
      // Determine if the card is found based on the class
      card.found = cell.hasClass("found");

      rowArray.push(card);
    });

    playboard.push(rowArray);
    rowArray = [];
  });

  return playboard;
}

$(document).ready(() => {
  let firstCard = null;
  let secondCard = null;
  let csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
  let scoreplayer1 = parseInt($("#scoreplayer1").text());
  let scoreplayer2 = parseInt($("#scoreplayer2").text());
  let currentPlayer = $("#player1").text();
  let winner = null;
  const movesDisplay = $("#moves-count"); // zmienn movesDisplay, przechowuje referencję do elementu HTML o identyfikatorze moves-count
  const pairsTotal = parseInt($("#pairs-count").text()); //const - constans - zmienna, ktora sie nie zmienia w trakcie trwania rozgrywki
  const player1 = $("#player1");
  const player2 = $("#player2");

  function checkWinConditions() {
    if (scoreplayer1 + scoreplayer2 === pairsTotal) {
      const endGameMessage = document.getElementById("end-game-message");
      if (scoreplayer1 > scoreplayer2) {
        endGameMessage.textContent = "Brawo! Wygrał Gracz 1!";
        winner = player1.text();
        var confettiSettings = { target: 'canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      } else if (scoreplayer2 > scoreplayer1) {
        endGameMessage.textContent = "Brawo! Wygrał Gracz 2!";
        winner = player2.text();
        var confettiSettings = { target: 'canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      } else {
        endGameMessage.textContent = "Brawo! Ale to były emocje! Remis!";
        winner = "remis";
        var confettiSettings = { target: 'canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      }
    }

  }  

  player1.addClass("active");
  // player2.removeClass('active');

  checkWinConditions();

  $("td").click(function () {
    console.log("clicked!");
    const currentCard = $(this);
    const currentImg = currentCard.children("img");

    if (!currentCard.hasClass("locked") && !currentCard.hasClass("found")) {
      if (firstCard === null) {
        // Odkrycie pierwszej karty
        currentCard.addClass("temporaryvisible");
        firstCard = currentCard;
        currentCard.addClass("locked");
      } else if (secondCard === null) {
        // Odkrycie drugiej karty
        const firstImg = firstCard.children("img");
        currentCard.addClass("temporaryvisible");
        secondCard = currentCard;
        currentCard.addClass("locked");
        movesDisplay.text(parseInt(movesDisplay.text()) + 1);

        if (currentImg.attr("src") === firstImg.attr("src")) {
          // Karty takie same
          currentCard.addClass("found");
          firstCard.addClass("found");

          firstCard = null;
          secondCard = null;

          if (currentPlayer === player1.text()) {
            scoreplayer1++;
            $("#scoreplayer1").text(scoreplayer1);
          } else if (currentPlayer === player2.text()) {
            scoreplayer2++;
            $("#scoreplayer2").text(scoreplayer2);
          }

          checkWinConditions();
          // $('td.locked').removeClass('locked');
        } else {
          // Karty różne
          setTimeout(() => {
            currentCard.removeClass("temporaryvisible");
            firstCard.removeClass("temporaryvisible");
            currentCard.addClass("notfound");
            firstCard.addClass("notfound");
            firstCard = null;
            secondCard = null;
            $("td.locked").removeClass("locked");

            if (currentPlayer === player1.text()) {
              currentPlayer = player2.text();
              player1.removeClass("active");
              player2.addClass("active");
            } else if (currentPlayer === player2.text()) {
              currentPlayer = player1.text();
              player1.addClass("active");
              player2.removeClass("active");
            }
          }, 2000);
        }
        const current_playboard = buildPlayboardJson();

        $.ajax({
          url: "moves/",
          type: "POST",
          headers: {
            "X-CSRFToken": csrf_token,
          },
          data: {
            moves: movesDisplay.text(),
            winner: winner,
            scoreplayer1: scoreplayer1,
            scoreplayer2: scoreplayer2,
            current_playboard: JSON.stringify(current_playboard),
          },
          dataType: "json",
          success: function (response) {
            movesDisplay.text(response.moves);
          },
          error: function (xhr, status, error) {
            console.log("Wystąpił błąd:", error);
          },
        });
      }
    }
  });
});
