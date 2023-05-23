#from django.http import HttpResponse
from django.shortcuts import render , redirect 
from .forms import NewMessageForm, NewCommentForm
from .models import NewMessage, NewComment

def Homepage(request, *args, **kwargs):
    contex = {"nazwa":"Strona Główna"}
    return render(request, 'omnie/Homepage.html', contex)

def omnie(request):
    contex = {"nazwa":"O mnie"}
    return render(request, 'omnie/omnie.html', contex)

#def Kontakt(request, *args, **kwargs):
    #contex = {"nazwa":"Kontakt"}
    #return render(request, "o-mnie/Kontakt.html", contex)

#def Kontakt_widok(request, *args, **kwargs):
    #obj = Kontakt.objects.get(id=1)
    #contex = {"objekt":obj}
    #return render(request, "o-mnie/Kontakt_widok.html", contex)
#
#

def new_message(request, *args, **kwargs):
    form = NewMessageForm(request.POST or None)
    print(form)
    if form.is_valid():
        my_first_message = form.save()
        return redirect('/')
    contex = {"form": form}
    return render(request, "omnie/new_message.html", contex)
#
#







# Create your views here.
