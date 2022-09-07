from django.urls import path
from .views import UserLogin, deletepost, getauthorpost, getblog, Savepost, getpost, UserRegistration, UserProfile, updatepost


urlpatterns = [
    path("savepost/", Savepost.as_view()),
    path("getpost/", getpost),
    path("getblog/<str:postid>/", getblog),
    path("register/", UserRegistration.as_view()),
    path("login/", UserLogin.as_view()),
    path("getuser/",UserProfile.as_view()),
    path("deletepost/<str:postid>/",deletepost),
    path("updatepost/<str:postid>/",updatepost),
    path("getauthorpost/<str:author_id>/",getauthorpost)
]
