from django.db import models


class NewGame(models.Model):
    player1 = models.CharField(max_length = 20)
    player2 = models.CharField(max_length = 20)
    number_cards = models.DecimalField(default=10 , max_digits = 20, decimal_places=0)
    


# Create your models here.
