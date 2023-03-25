from django import forms
from .models import NewMessage, NewComment

class NewMessageForm (forms.ModelForm):
    class Meta:
        model = NewMessage
        fields = [
            "name",
            "surname",
            "message",

        ]

class NewCommentForm (forms.ModelForm):
    class Meta:
        model = NewComment
        fields = [
            "user",
            "comment",
        ]