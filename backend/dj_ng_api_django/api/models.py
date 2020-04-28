from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=128)
    desc = models.TextField()
