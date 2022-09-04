from django.urls import path
from .views import RegisterUserAPIView, UserDetailAPI, login, register, savepost,getpost
urlpatterns = [
    path("savepost/",savepost),
    path("getpost/",getpost),
    path("register/",register),
    path("login/",login),
    path("register2/",RegisterUserAPIView.as_view()),
    path("getuser",UserDetailAPI.as_view())
]