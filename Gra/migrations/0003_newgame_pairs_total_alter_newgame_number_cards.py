# Generated by Django 4.1.2 on 2023-05-05 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gra", "0002_newgame_playboard_alter_newgame_number_cards"),
    ]

    operations = [
        migrations.AddField(
            model_name="newgame",
            name="pairs_total",
            field=models.IntegerField(editable=False, null=True),
        ),
        migrations.AlterField(
            model_name="newgame",
            name="number_cards",
            field=models.IntegerField(
                choices=[
                    (4, "4 cards"),
                    (8, "8 cards"),
                    (16, "16 cards"),
                    (32, "32 cards"),
                ]
            ),
        ),
    ]