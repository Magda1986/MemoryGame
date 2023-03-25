#from django.http import HttpResponse
from django.shortcuts import render , redirect 
from .forms import NewMessageForm, NewCommentForm
from .models import NewMessage, NewComment

def Homepage(request, *args, **kwargs):
    contex = {"nazwa":"Strona Główna"}
    return render(request, 'O_mnie/Homepage.html', contex)

def O_mnie(request):
    contex = {"nazwa":"O mnie"}
    return render(request, 'O_mnie/O_mnie.html', contex)

#def Kontakt(request, *args, **kwargs):
    #contex = {"nazwa":"Kontakt"}
    #return render(request, "O_mnie/Kontakt.html", contex)

#def Kontakt_widok(request, *args, **kwargs):
    #obj = Kontakt.objects.get(id=1)
    #contex = {"objekt":obj}
    #return render(request, "O_mnie/Kontakt_widok.html", contex)
#
#

def new_message(request, *args, **kwargs):
    form = NewMessageForm(request.POST or None)
    print(form)
    if form.is_valid():
        my_first_message = form.save()
        return redirect('/')
    contex = {"form": form}
    return render(request, "O_mnie/new_message.html", contex)
#
#







# Create your views here.
