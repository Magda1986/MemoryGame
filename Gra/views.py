from django.shortcuts import render

def Gra(request, *args, **kwargs):
    contex = {"nazwa":"Gra"}
    return render(request, 'Gra/Gra.html', contex)


