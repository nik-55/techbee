from dataclasses import field
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from posts.models import Post, MyUser

class PostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Post
        fields = ["blog_name","id","content","description","author_id","id"]


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id','email','username','password']
        extra_kwargs = {
            'password' : {'write_only':True}
        }

    def validate(request,data) : 
        return data

    def create(self,validate_data):
        return MyUser.objects.create_user(**validate_data)



class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length = 100)
    class Meta:
        model = MyUser
        fields = ['email','password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id','username','email']


class SaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['blog_id']