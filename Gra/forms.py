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
    class Media:
        js = ('gra/new_game_form.js', )
    
    no_player2 = [
    ("player3", "Gram sam"),
    ("player4", "Gram z komputerem")
    ]
    player2_select = forms.ChoiceField(choices=no_player2 )
    