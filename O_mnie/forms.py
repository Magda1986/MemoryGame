from django import forms
from .models import NewMessage, NewComment

class NewMessageForm (forms.models):
    class Meta:
        model = NewMessage
        fields = [
            "name",
            "surname",
            "message",

        ]

class NewCommentForm (forms.models):
    class Meta:
        model = NewComment
        fields = [
            "user",
            "comment",
        ]