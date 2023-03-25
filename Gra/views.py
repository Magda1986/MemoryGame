from django.shortcuts import render, redirect
from .forms import NewGameForm
#from .models import NewGame 

def gra(request, *args, **kwargs):
    form = NewGameForm(request.POST or None)
    if form.is_valid():
        test = form.save() 
        return redirect ("/")
        print(test)
    contex = {"nazwa" : "gra", "form" : form, }
    return render(request, "gra/gra.html", contex)



    #contex = {"nazwa":"Gra"}
    #return render(request, 'Gra/Gra.html', contex)


