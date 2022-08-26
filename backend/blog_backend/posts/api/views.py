from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostsSerializer
from posts.models import Posts
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