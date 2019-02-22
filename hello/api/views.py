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

	# def get_serializer_context(self):
	# 	context = super(AttendeeCreateView, self).get_serializer_context()
	# 	context["data"] = request.data.get("email")
	# 	return context

	def perform_create(self, serializer):
		# return serializer
		serializer.save()
		event_id = self.request.data.get("event_id")
		ticket_id = self.request.data.get("ticket_id")
		# The event and ticket id should be passed from the post
		attendee = Attendee.objects.get(email=self.request.data.get("email"))
		event = Event.objects.get(pk=event_id)
		ticket =  Ticket.objects.get(pk=ticket_id)
		# print(attendee)
		# print(attendee.pk)
		# print(attendee[0].pk)
		# request = self.context.get('request')

		obj, created = Registration.objects.update_or_create(
			attendee_id=attendee.pk,
			defaults={
				'attendee_id': Attendee.objects.get(email=self.request.data.get("email")),
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
