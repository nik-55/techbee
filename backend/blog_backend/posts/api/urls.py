from django.urls import path
from .views import savepost,getpost
urlpatterns = [
    path("savepost/",savepost),
    path("getpost/",getpost)
]