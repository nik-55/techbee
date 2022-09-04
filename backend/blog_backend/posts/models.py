from django.db import models

class Post(models.Model):
    blog_name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    content = models.TextField()