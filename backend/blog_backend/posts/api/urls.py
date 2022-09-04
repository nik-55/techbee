from django.urls import path
from .views import UserLogin, getblog, savepost, getpost, UserRegistration
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path("savepost/", savepost),
    path("getpost/", getpost),
    path("getblog/<str:postid>/", getblog),
    path("register/", UserRegistration.as_view()),
    path("login/", UserLogin.as_view()),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
