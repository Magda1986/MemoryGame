# Generated by Django 4.1.7 on 2023-06-05 12:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gra', '0004_newgame_moves_alter_newgame_pairs_total'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newgame',
            name='pairs_total',
        ),
    ]
