from django.urls import path
from .views import UserLogin, getblog, savepost, getpost, UserRegistration, UserProfile


urlpatterns = [
    path("savepost/", savepost),
    path("getpost/", getpost),
    path("getblog/<str:postid>/", getblog),
    path("register/", UserRegistration.as_view()),
    path("login/", UserLogin.as_view()),
    path("getuser/",UserProfile.as_view())
]
