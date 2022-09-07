from locale import normalize
from tkinter.messagebox import NO
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class Post(models.Model):
    blog_name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    content = models.TextField()
    author_id = models.CharField(max_length=255)
    # last_edit = models.DateTimeField(auto_now_add=True)


class Blog_Id(models.Model):
    blog_id = models.CharField(max_length=100, blank=True, null=True)


class MyUserManager(BaseUserManager):
    def create_user(self, email, username, blog_id=None, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            blog_id=blog_id
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, blog_id=None, password=None):
        user = self.create_user(
            email,
            password=password,
            username=username,
            blog_id=blog_id
        )

        user.is_admin = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )

    username = models.CharField(max_length=200)
    blog_id = models.ForeignKey(Blog_Id, on_delete=models.CASCADE, null=True,blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
