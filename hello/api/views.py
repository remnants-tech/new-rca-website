from django.db.models import Q
from rest_framework import generics, mixins

from hello.models import Attendee, Registration, Event, Ticket, Transaction, Reference, Logging
from .serializers import AttendeeSerializer, EventSerializer, RegistrationSerializer, TicketSerializer, TransactionSerializer, LoggingSerializer, ReferenceSerializer

class AttendeeCreateView(mixins.CreateModelMixin, generics.ListAPIView):

	lookup_field = 'pk'
	serializer_class = AttendeeSerializer
	
	def get_queryset(self):
		qs = Attendee.objects.all()
		query = self.request.GET.get("q")
		if query is not None:
			qs = qs.filter(
				Q(email__icontains=query)|
				Q(first_name__icontains=query)|
				Q(last_name__icontains=query)
				).distinct()
		return qs
	# def get_queryset(self):
	# 	return Attendee.objects.all()

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

	# def put(self, request, *args, **kwargs):
	# 	return self.update(request, *args, **kwargs)

	# def patch(self, request, *args, **kwargs):
	# 	return self.update(request, *args, **kwargs)

class AttendeeRudView(generics.RetrieveUpdateDestroyAPIView):

	lookup_field = 'pk'
	serializer_class = AttendeeSerializer
	
	def get_queryset(self):
		return Attendee.objects.all()

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
