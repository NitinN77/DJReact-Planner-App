from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    value = models.CharField(max_length=20, default='0')
    author = models.CharField(max_length=100, default='Nitin')

    def __str__(self):
        return self.title