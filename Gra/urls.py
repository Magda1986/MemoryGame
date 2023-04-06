from django.urls import path
from . import views

urlpatterns = [
    path('', views.gra, name='gra'),
    path('/rozgrywka/<int:id>/', views.rozgrywka, name='rozgrywka')
]