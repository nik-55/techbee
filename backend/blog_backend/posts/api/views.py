from operator import is_
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer, SaveSerializer, UserLoginSerializer, UserProfileSerializer, UserRegistrationSerializer
from rest_framework.views import APIView
from posts.models import Post
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class Savepost(APIView):
    # authentication_classes = [IsAuthenticated]
    def post(self, request):
        data = request.data
        obj = Post(
            blog_name=data["blog_name"],
            description=data["description"],
            content=data["content"],
            author_id = data["author_id"]
        )

        # # serializer = SaveSerializer(request.user)

        
        # # if serializer.is_valid(raise_exception=True):
        # #     serializer.save()
        obj.save()
        return HttpResponse("success ok")


@api_view(["GET"])
def getpost(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getauthorpost(request,author_id):
    posts = Post.objects.filter(author_id=author_id)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)



@api_view(["GET"])
def getblog(request, postid):
    post = Post.objects.get(id=postid)
    serializer = PostSerializer(post)
    return Response(serializer.data)


@api_view(["DELETE"])
def deletepost(request, postid):
    post = Post.objects.get(id=postid)
    post.delete()
    return HttpResponse("Delete")


@api_view(["PUT"])
def updatepost(request, postid):
    post = Post.objects.get(id=postid)
    data = request.data
    post.content = data["content"]
    post.blog_name = data["blog_name"]
    post.description = data["description"]
    post.save()
    return HttpResponse("Updated")


class UserRegistration(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({'mssg': 'success'})

        return Response(serializer.errors)


class UserLogin(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'mssg': 'success', 'token': token})
        return Response({"error": "Error occured"})


class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)
