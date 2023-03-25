from django.db import models


class NewGame(models.Model):
    player1 = models.CharField(max_length = 15)
    player2 = models.CharField(max_length = 15)
    no_cards = [
    ("4", "4"),
    ("6", "6"),
    ("8", "8"),
    ]
    number_cards = models.CharField(max_length = 15, choices=no_cards)
    #number_cards = models.DecimalField(default=10 , max_digits=20, decimal_places=0)
    
    
    


# Create your models here.
