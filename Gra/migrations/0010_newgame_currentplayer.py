# Generated by Django 4.1.7 on 2023-06-21 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gra", "0009_newgame_current_playboard_alter_newgame_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="newgame",
            name="currentPlayer",
            field=models.CharField(blank=True, max_length=15),
        ),
    ]