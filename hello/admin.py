from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.
from .models import Event, Ticket, Registration, Reference, Profile

User = get_user_model()


admin.site.register(Event)
admin.site.register(Ticket)
admin.site.register(Registration)
admin.site.register(Reference)

admin.site.register(User)
admin.site.register(Profile)
# Remove Group Model from admin. We're not using it.
admin.site.unregister(Group)



