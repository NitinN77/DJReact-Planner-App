from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    value = models.CharField(max_length=20, default='0')

    def __str__(self):
        return self.title