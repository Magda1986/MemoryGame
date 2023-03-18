from django.urls import path
from . import views

urlpatterns = [
    path('', views.Homepage, name='O_mnie'),
    path("O_mnie", views.O_mnie, name='O_mnie'),
]