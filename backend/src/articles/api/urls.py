from django.urls import path
from .views import ArticleDetailView, ArticleLIstView
urlpatterns = [
    path('', ArticleLIstView.as_view()),
    path('<pk>', ArticleDetailView.as_view())
]
