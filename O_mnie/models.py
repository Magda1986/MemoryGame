from django.db import models


class NewMessage(models.Model):
    name = models.CharField(max_length = 20)
    surname = models.CharField(max_length = 20)
    message = models.TextField()


class NewComment(models.Model):
    user = models.CharField(max_length = 20)
    comment = models.TextField()
    




# Create your models here.
