from django.contrib import admin
from posts.models import Post, MyUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

admin.site.register(Post)


class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'email', 'username', 'is_admin')
    list_filter = ('is_admin',)

    fieldsets = (
        ('User Credentials', {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('username',)}),
        ('Permissions', {'fields': ('is_admin',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


admin.site.register(MyUser, UserAdmin)