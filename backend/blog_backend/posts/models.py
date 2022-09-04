from django.db import models

# Create your models here.
class Posts(models.Model):
    input = models.TextField()

# class Upload(models.Model):
#     file = models.FileField()