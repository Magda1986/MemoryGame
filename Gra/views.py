from django.shortcuts import render, redirect
from .forms import NewGameForm

# from jinja2 import Template
from .models import NewGame, create_playboard
from django.http import JsonResponse


def gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    if form.is_valid():
        test = form.save()
        return redirect(f"rozgrywka/{test.id}/")
    contex = {
        "nazwa": "Gra",
        "form": form,
    }
    return render(request, "gra/gra.html", contex)


def rozgrywka(request, id):
    game = NewGame.objects.get(id=id)
    context = {
        "cards": game.playboard,
        "id": id,
        "player1": game.player1,
        "player2": game.player2,
        "pairs_total": round(game.number_cards * 0.5),
    }
    return render(request, "gra/rozgrywka.html", context)


def moves(request, id):
    if request.method == "POST":
        game = NewGame.objects.filter(id=id)
        moves = request.POST.get("moves")
        game.update(moves=moves)
        return JsonResponse({"success": True})
    else:
        return JsonResponse({"success": False})


def wyniki(request):
    wyniki_list = [
        {
            "id": wynik.id,
            "player1": wynik.player1,
            "player2": wynik.player2,
            "moves": wynik.moves,
            "pairs_total": round(wynik.number_cards * 0.5),
        }
        for wynik in NewGame.objects.all()
        if wynik.moves
    ]

    context = {"nazwa": "Wyniki Gry", "wyniki": wyniki_list}

    # przekazuję listę wyników do szablonu HTML
    return render(request, "gra/wyniki.html", context)


# def create_playboard(cards_no, row_len=4):
#     deck = 2 * list(range(int(0.5 * cards_no)))  #tworzymy talie kart
#     shuffle(deck)# tasowanie
#     return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy
