from django.shortcuts import render, redirect
from .forms import NewGameForm
#from jinja2 import Template
from random import shuffle


#from .models import NewGame 

def gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    if form.is_valid():
        test = form.save()
        return redirect(f"gra/rozgrywka/{test.id}/")
        print(test)
    contex = {"nazwa" : "gra", "form" : form, }
    return render(request, "gra/gra.html", contex)

def create_playboard(cards_no, row_len=4):
    deck = 2 * list(range(int(0.5 * cards_no)))  #tworzymy talie kart
    shuffle(deck)# tasowanie
    return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy


def rozgrywka(request, id):
    cards = create_playboard(32)
    context = {"cards": cards, "id": id}
    return render(request, "gra/rozgrywka.html", context)



    #contex = {"nazwa":"Gra"}
    #return render(request, 'Gra/Gra.html', contex)


