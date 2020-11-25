from articles.models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets

# for i in range(len(Article.objects.all())):
#     clen = len(Article.objects.filter(id=i+3)[0].content)
#     Article.objects.filter(id=i+3).update(value=clen)


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    
