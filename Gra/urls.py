from django.urls import path
from . import views

urlpatterns = [
    path('', views.gra, name='gra'),
    path('rozgrywka/<int:id>/', views.rozgrywka),
    path('rozgrywka/<int:id>/moves/', views.moves, name='moves'),
    path('wyniki/', views.wyniki, name='wyniki'),
]