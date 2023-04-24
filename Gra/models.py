from django.db import models
from random import shuffle

cards = [
    (4, "4cards"),
    (8, "8cards"),
    (16, "16cards"),
    (32, "32cards")
    ]


def create_playboard(cards_no, row_len=4):
    deck = 2 * list(range(int(0.5 * cards_no)))  #tworzymy talie kart
    shuffle(deck)# tasowanie
    return [deck[i: i+row_len] for i in range(0, len(deck), row_len)] #ukladanie kart na planszy


class NewGame(models.Model):
    player1 = models.CharField(max_length = 15, blank=True)
    player2 = models.CharField(max_length = 15, blank=True)
    number_cards = models.IntegerField(choices=cards)
    playboard = models.JSONField(blank=True, null=True) #generuje sie jako pusty )
    
    def save(self, *args, **kwargs):
        self.playboard = create_playboard(self.number_cards)
        super().save(*args, **kwargs)

    #number_cards = models.DecimalField(default=10 , max_digits=20, decimal_places=0)

    #Nadpisywanie funkcji save do sprawdzeniam - do sprawdzenia. podczas zapisywania modelu tworzy się plansza!! W klasie name NADPISYWANIE FUNKCJI SAVE W DJANGO!! 
    # POLE PLANSZA
    # BLANCK
    # w trakcie swywołania funkcji save w tworzy sie playground 
    
    
    


# Create your models here.
