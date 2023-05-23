from django.shortcuts import render, redirect
from .forms import NewGameForm
#from jinja2 import Template
from random import shuffle
from .models import NewGame, create_playboard
from django.http import JsonResponse


def gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    if form.is_valid():
        test = form.save()
        test.playboard = create_playboard(test.number_cards)
        test.pairs_total = int((test.number_cards)/2) 
        test.save()
        game=NewGame.objects.get(id=test.id)
        return redirect(f"rozgrywka/{test.id}/")
    contex = {"nazwa" : "Gra", "form" : form, }
    return render(request, "gra/gra.html", contex)


def rozgrywka(request, id):
    game=NewGame.objects.get(id=id)
    context = {"cards": game.playboard, "id": id, "player1": game.player1, "player2": game.player2, "pairs_total": game.pairs_total}
    return render(request, "gra/rozgrywka.html", context)


def moves(request, id):
    if request.method == 'POST':
        game = NewGame.objects.get(id=id)
        moves = request.POST.get('moves')
        print(moves) # wypisuje na konsoli wartość moves
        game.moves = moves
        game.save()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})


def wyniki(request):
    # pobieramy wszystkie obiekty NewGame z bazy danych
    wyniki = NewGame.objects.all()
    # inicjujemy pustą listę, do której będziemy dodawać wyniki
    wyniki_list = []
    # przejdź przez każdy obiekt NewGame i dodaj go do listy wyników
    for wynik in wyniki:
        # pobierz nazwy graczy, liczbę par i liczbę ruchów dla każdej gry
        player1 = wynik.player1
        player2 = wynik.player2
        pairs_total = wynik.pairs_total
        moves = wynik.moves

        # dodajemy wyniki do listy wyników
        wyniki_list.append({
            'player1': player1,
            'player2': player2,
            'pairs_total': pairs_total,
            'moves': moves
        })
    
    context = {
        'nazwa': 'Wyniki Gry',
        'wyniki': wyniki_list
    }
    
    # przekazuję listę wyników do szablonu HTML
    return render(request, 'gra/wyniki.html', context)
    


# def create_playboard(cards_no, row_len=4):
#     deck = 2 * list(range(int(0.5 * cards_no)))  #tworzymy talie kart
#     shuffle(deck)# tasowanie
#     return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy




