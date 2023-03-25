from django.urls import path
from . import views

urlpatterns = [
    path('', views.Homepage, name='omnie'),
    path('omnie', views.omnie, name='omnie'),
    #path("Komentarz",views.Komentarz, name="Komentarz"), 
    #path("Kontakt", views.Kontakt, name="Kontakt"),

]