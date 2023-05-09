from django.shortcuts import render, redirect
from .forms import NewGameForm
#from jinja2 import Template
from random import shuffle
from .models import NewGame
from django.http import JsonResponse


def gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    if form.is_valid():
        test = form.save()
        return redirect(f"rozgrywka/{test.id}/")
    contex = {"nazwa" : "gra", "form" : form, }
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

# def moves(request):
#     if request.method == 'POST':
#         id = request.session.get('id')
#         game = NewGame.objects.get(id=id)
#         moves = request.POST.get('moves')
#         print(moves) # wypisuje na konsoli wartość moves
#         game.moves = moves
#         game.save()
#         return JsonResponse({'success': True})
#     else:
#         return JsonResponse({'success': False})



# def count_moves(request):
#     if request.method == 'POST':
#         moves = request.POST.get('moves')
#         # wykonaj dowolne operacje na liczniku ruchów
#         return JsonResponse({'success': True})
#     else:
#         return JsonResponse({'success': False})




# def create_playboard(cards_no, row_len=4):
#     deck = 2 * list(range(int(0.5 * cards_no)))  #tworzymy talie kart
#     shuffle(deck)# tasowanie
#     return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy

# def create_playboard(number_cards, row_len=4):
#     deck = 2 * list(range(int(0.5 * number_cards)))  #tworzymy talie kart
#     shuffle(deck)# tasowanie
#     return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy



# def rozgrywka(request, id):
#     if request.method == "POST":
#         number_cards = request.POST.get("number_cards")
#     else:
#         number_cards = 16
    
#     cards = create_playboard(number_cards)
#     context = {"cards": cards, "id": id}
#     return render(request, "gra/rozgrywka.html", context)

#----------------------------

# def rozgrywka(request, id):
#     if request.method == "POST":
#         form = NewGameForm(request.POST)
#         if form.is_valid():
#             number_cards = form.cleaned_data.get("number_cards")
#         else:
#             number_cards = 16
#     else:
#         number_cards = 16
    
#     cards = create_playboard(number_cards)
#     context = {"cards": cards, "id": id}
#     return render(request, "gra/rozgrywka.html", context)
#-----------------------

# def rozgrywka(request, id):
#     game = NewGame.objects.get(id=id)
#     number_cards = game.number_cards
#     cards = create_playboard(number_cards)
#     context = {"cards": cards, "id": id}
#     return render(request, "gra/rozgrywka.html", context)
   
   
   
   
    #contex = {"nazwa":"Gra"}
    #return render(request, 'Gra/Gra.html', contex)


