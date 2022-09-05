from django.urls import path
from .views import UserLogin, deletepost, getblog, savepost, getpost, UserRegistration, UserProfile, updatepost


urlpatterns = [
    path("savepost/", savepost),
    path("getpost/", getpost),
    path("getblog/<str:postid>/", getblog),
    path("register/", UserRegistration.as_view()),
    path("login/", UserLogin.as_view()),
    path("getuser/",UserProfile.as_view()),
    path("deletepost/<str:postid>/",deletepost),
    path("updatepost/<str:postid>/",updatepost)
]
