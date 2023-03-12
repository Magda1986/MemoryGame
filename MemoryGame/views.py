from django.shortcuts import render 
from django.http import HttpResponse 
from django.template import loader 

def base(request):
    t=loader.get_template("MemoryGame/base.html")
    return HttpResponse(t.render())