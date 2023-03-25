from django.shortcuts import render, redirect
from .forms import NewGameForm
#from .models import NewGame 

def Gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    contex = {"nazwa" : "Gra", "form" : form, }
    return render(request, "Gra/Gra.html", contex)



    #contex = {"nazwa":"Gra"}
    #return render(request, 'Gra/Gra.html', contex)


