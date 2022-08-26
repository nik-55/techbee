from django.urls import path,include

urlpatterns = [
    path("",include("posts.api.urls"))
    ]