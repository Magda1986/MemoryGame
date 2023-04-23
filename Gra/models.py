from django.db import models

cards = [
    ("4cards", 4),
    ("8cards", 8),
    ("16cards", 16),
    ("32cards", 32)
    ]

class NewGame(models.Model):
    player1 = models.CharField(max_length = 15, blank=True)
    player2 = models.CharField(max_length = 15, blank=True)
    number_cards = models.CharField(max_length = 15, choices=cards)
    #number_cards = models.DecimalField(default=10 , max_digits=20, decimal_places=0)

    #Nadpisywanie funkcji save do sprawdzeniam - do sprawdzenia. podczas zapisywania modelu tworzy się plansza!! W klasie name NADPISYWANIE FUNKCJI SAVE W DJANGO!! 
    # POLE PLANSZA
    # BLANCK
    # w trakcie swywołania funkcji save w tworzy sie playground 
    
    
    


# Create your models here.
