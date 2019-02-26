from django.conf import settings
from django.db.models import Q
from rest_framework import generics, mixins
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from hello.models import Profile, Registration, Event, Ticket, Transaction, Reference, Logging
from .serializers import CustomProfileSerializer, UserSerializer, ProfileSerializer, EventSerializer, RegistrationSerializer, TicketSerializer, TransactionSerializer, LoggingSerializer, ReferenceSerializer

from rest_auth.registration.views import RegisterView

from rest_auth.app_settings import (TokenSerializer,
                                    JWTSerializer,
                                    create_token)
from allauth.account.utils import complete_signup
from allauth.account import app_settings as allauth_settings

User = get_user_model()

class UserCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = 'UserSerializer'
	user = User.objects
	queryset = User.objects.all()
	# def get_queryset(self):
	# 	qs = Profile.objects.all()
	# 	# query = self.request.GET.get("q")
	# 	# if query is not None:
	# 	# 	qs = qs.filter(
	# 	# 		Q(first_name__icontains=query)|
	# 	# 		Q(last_name__icontains=query)|
	# 	# 		Q(email__icontains=query)
	# 	# 		).distinct()
	# 	return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class UserRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = UserSerializer
	
	def get_queryset(self):
		return User.objects.all()


class ProfileCreateView(mixins.CreateModelMixin, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = ProfileSerializer
	queryset = Profile.objects.all()

	def perform_create(self, serializer):
		# return serializer
		user = User.objects.get(email=self.request.data.get("email"))

		user, created = User.objects.update_or_create(
			email=user.email,
			defaults={
				"first_name": self.request.data.get("first_name"),
				"last_name": self.request.data.get("last_name")
			}
		)

		# serializer.save()
		profile, created = Profile.objects.update_or_create(
			user=user,
			defaults={
				"korean_name": self.request.data.get("korean_name"),
		        "dob": self.request.data.get("dob"),
		        "gender": self.request.data.get("gender"),
		        "language": self.request.data.get("language"),
		        "phone_number": self.request.data.get("phone_number"),
		        "interest": self.request.data.get("interest"),
		        "church": self.request.data.get("church"),
		        "church_position": self.request.data.get("church_position"),
		        "training": self.request.data.get("training"),
		        "leader": self.request.data.get("leader"),
		        "staff": self.request.data.get("staff"),
		        "school": self.request.data.get("school"),
		        "grade": self.request.data.get("grade"),
		        "major": self.request.data.get("major"),
		        "company": self.request.data.get("company"),
		        "company_position": self.request.data.get("company_position"),
		        "shirt_size": self.request.data.get("shirt_size"),
		        "address": self.request.data.get("address"),
		        "city": self.request.data.get("city"),
		        "state": self.request.data.get("state"),
		        "zip_code": self.request.data.get("zip_code"),
			}
		)
		event_id = self.request.data.get("event_id")
		ticket_id = self.request.data.get("ticket_id")
		# The event and ticket id should be passed from the post
		

		event = Event.objects.get(pk=event_id)
		ticket =  Ticket.objects.get(pk=ticket_id)
		# print(attendee)
		# print(attendee.pk)
		# print(attendee[0].pk)
		# request = self.context.get('request')
		obj, created = Registration.objects.update_or_create(
			user=user,
			defaults={
				'event_id': event,
				'ticket_id': ticket,
				'paid': self.request.data.get("paid"),
				'staff': self.request.data.get("staff"),
				'team_id': self.request.data.get("team_id"),
				'room': self.request.data.get("room"),
				'shirt_size': self.request.data.get("shirt_size"),
				'health': self.request.data.get("health"),
				'prayer_topic': self.request.data.get("prayer_topic")
			}
		)
		if created:
			return obj
		else:
			return "The user has already registered"

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

# BACK UP
# class ProfileCreateView(mixins.CreateModelMixin, generics.ListAPIView):

# 	lookup_field = 'pk'
# 	serializer_class = CustomProfileSerializer
# 	queryset = Profile.objects.all()

# 	# def get_queryset(self):
# 	# 	qs = Profile.objects.all()
# 	# 	# query = self.request.GET.get("q")
# 	# 	# if query is not None:
# 	# 	# 	qs = qs.filter(
# 	# 	# 		Q(user__icontains=query)).distinct()
# 	# 	return qs

# 	def perform_create(self, serializer):
# 		serializer.save(user=self.request.user)
# 		# serializer.save(user=self.request.user)

# 	def post(self, request, *args, **kwargs):
# 		return self.create(request, *args, **kwargs)

class ProfileRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = ProfileSerializer
	
	def get_queryset(self):
		return Profile.objects.all()

class EventCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer
	
	def get_queryset(self):
		qs = Event.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(name__icontains=query)|
				Q(event_description__icontains=query)|
				Q(city__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class EventRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer

	def get_queryset(self):
		return Event.objects.all()

class RegistrationCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = RegistrationSerializer
	
	def get_queryset(self):
		qs = Registration.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(attendee_id__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)


class RegistrationRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = RegistrationSerializer

	def get_queryset(self):
		return Registration.objects.all()

class TicketCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer
	
	def get_queryset(self):
		qs = Ticket.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(ticket_name__icontains=query)|
				Q(ticket_description__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class TicketRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = TicketSerializer

	def get_queryset(self):
		return Ticket.objects.all()

class TransactionCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer
	
	def get_queryset(self):
		qs = Transaction.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(attendee_id__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class TransactionRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = TransactionSerializer

	def get_queryset(self):
		return Transaction.objects.all()

class LoggingCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer
	
	def get_queryset(self):
		qs = Logging.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(attendee_id__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class LoggingRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = LoggingSerializer

	def get_queryset(self):
		return Logging.objects.all()

class ReferenceCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = EventSerializer
	
	def get_queryset(self):
		qs = Reference.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(value__icontains=query)|
				Q(abbreviation__icontains=query)
				).distinct()
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class ReferenceRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = ReferenceSerializer

	def get_queryset(self):
		return Reference.objects.all()
