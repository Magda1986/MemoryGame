from django.db import models


class NewGame(models.Model):
    player1 = models.CharField(max_length = 15, blank=True)
    no_player2 = [
    ("player3", "Gram sam"),
    ("player4", "Gram z komputerem")
    ]
    player2 = models.CharField(max_length = 15, choices=no_player2, blank=True)
    cards = [
    ("4cards", 4),
    ("8cards", 8),
    ("16cards", 16),
    ("32cards", 32)
    ]
    number_cards = models.CharField(max_length = 15, choices=cards)
    #number_cards = models.DecimalField(default=10 , max_digits=20, decimal_places=0)
    
    
    


# Create your models here.
