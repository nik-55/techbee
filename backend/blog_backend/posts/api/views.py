from django.shortcuts import render
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PostsSerializer,UserSerializer,RegisterSerializer
from posts.models import Posts
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics

@api_view(["POST"])
def savepost(request):
    inp = Posts(input=request.data["input"])
    inp.save()
    return HttpResponse("success ok")

@api_view(["GET"])
def getpost(request) : 
    posts = Posts.objects.all()
    serializer=PostsSerializer(posts,many=True)
    return Response(serializer.data)


@api_view(["POST"])
def register(request):
    username,email,password = request.data.values()
    user = User.objects.create_user(
        username=username,
        email = email )

    user.set_password(password)
    user.save()
       
    return HttpResponse("Registered")


@api_view(["POST"])
def login(request):
    username,password = request.data.values()
    user = authenticate(username=username,password=password)
    if user is not None:
        login(request,user)
        return HttpResponse(user)
    return HttpResponse("User not exist")

    
class UserDetailAPI(APIView):
  authentication_classes = (TokenAuthentication,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class RegisterUserAPIView(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer

# @api_view(["GET"])
# def getfile(request) : 
#     # file = Upload.objects.all()[0]
#     # print(file.name)
#     # return FileResponse(open(file,'rb'))
#     return HttpResponse('failed')

# @api_view(["POST"])
# def upload(request):
#     inp = Posts(input=request.data["input"])
#     inp.save()
#     # file = Upload(file=request.data['file'])
#     # file.save()
#     print(Upload.objects.all()[0])
#     return HttpResponse("Uploaded")