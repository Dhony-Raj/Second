# Generated by Django 4.2.4 on 2023-11-18 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cat_num', models.TextField(max_length=1000)),
            ],
        ),
    ]
