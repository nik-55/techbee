from rest_framework import serializers
from posts.models import Posts
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class PostsSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Posts
        fields = ["input","id"]

class UserSerializer(serializers.Serializer):
    class Meta :
        model = User
        fields = ['username','id']

    # def create(self,data):
    #     user = User.objects.create(
    #         username = data["username"],
    #         email = data["email"],
    #     )
    
    #     user.set_password(data["password"])
    #     user.save()
    #     return user

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())] )

    password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])


    class Meta:
        model = User
        fields = ['username', 'password','email']

        def create(self, validated_data):
            user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'] )

            user.set_password(validated_data['password'])
            user.save()
            return user