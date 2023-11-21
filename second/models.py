from django.db import models

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    cat_num =  models.TextField(max_length=1000)
