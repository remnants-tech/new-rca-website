from django.contrib import admin

# Register your models here.
from .models import Attendee, Event, Ticket, Registration, Reference

admin.site.register(Attendee)
admin.site.register(Event)
admin.site.register(Ticket)
admin.site.register(Registration)
admin.site.register(Reference)

