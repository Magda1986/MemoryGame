# Generated by Django 4.1.7 on 2023-06-09 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gra', '0006_alter_newgame_scoreplayer1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newgame',
            name='scoreplayer1',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='newgame',
            name='scoreplayer2',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
