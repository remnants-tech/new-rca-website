from django.shortcuts import render
from django.http import HttpResponse

# from .models import Greeting
# from .models import AttendeeDao
# from .models import Attendee

import json

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")

def createAccount(request):
    return render(request, "createAccount.html")


# def db(request):

#     greeting = Greeting()
#     greeting.save()

#     greetings = Greeting.objects.all()

#     return render(request, "db.html", {"greetings": greetings})

