from django.http import HttpResponse
from django.shortcuts import render

def homepage(*args, **kwargs):
    return HttpResponse("Tutaj będzie strona startowa, i to z niej będzie przekierowanie na stronę 'GRA' i na stronę 'STATYSTYKI'")

# Create your views here.
