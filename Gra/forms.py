from django import forms
from .models import NewGame

class NewGameForm (forms.ModelForm):
    class Meta:
        model = NewGame
        fields = (
            "player1",
            "player2",
            "number_cards",
        )