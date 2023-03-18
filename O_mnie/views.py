#from django.http import HttpResponse
from django.shortcuts import render

def Homepage(request):
    return render(request, 'O_mnie/Homepage.html', {})

def O_mnie(request):
    return render(request, 'O_mnie/O_mnie.html', {})





# Create your views here.
