from django.urls import path
from . import views

urlpatterns = [
    path('', views.Gra, name='Gra'),
]