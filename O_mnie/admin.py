from django.contrib import admin
from .models import NewMessage, NewComment

admin.site.register(NewMessage) #Mozliwe dodawanie nowej wiadomosci ze strony admina
admin.site.register(NewComment) #Mozliwe dodawanie nowej wiadomosci ze strony admina

# Register your models here.
