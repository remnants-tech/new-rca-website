from rest_framework import serializers

from hello.models import Attendee, Event, Ticket, Registration, Transaction, Reference, Logging

class AttendeeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Attendee
		fields = [
			'pk',
			'email',
			'password',
			'first_name',
			'last_name',
			'korean_name',
			'dob',
			'gender',
			'language',
			'phone_number',
			'interest',
			'church',
			'church_position',
			'training',
			'leader',
			'staff',
			'school',
			'grade',
			'major',
			'company',
			'company_position',
			'shirt_size',
			'address',
			'city',
			'state',
			'zip_code',
			'attendee_created',
		]

		def validate_title(self, value):
			qs = Attendee.objects.filter(title__iexact=value)
			if self.instance:
				qs = qs.exclude(pk=self.instance.pk)
			if qs.exists():
				raise serializers.ValidationError("The email had already been used")

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event
		fields = [
			'pk',
			'name',
			'address',
			'city',
			'zip_code',
			'language',
			'event_description',
			'event_start',
			'event_end',
			'event_start_time',
			'event_end_time',
			'event_created',
		]

class TicketSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = [
			'pk',
			'event_id',
			'ticket_name',
			'ticket_description',
			'ticket_price',
			'ticket_start',
			'ticket_end',
			'ticket_created',
		]

class RegistrationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Registration
		fields = [
			'pk',
			'attendee_id',
			'event_id',
			'ticket_id',
			'paid',
			'staff',
			'team_id',
			'room',
			'shirt_size',
			'health',
			'prayer_topic',
			'registration_created',
		]

class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Transaction
		fields = [
			'pk',
			'attendee_id',
			'event_id',
			'ticket_id',
			'gateway_id',
			'payment_type',
			'total_amount',
			'currency',
			'status',
			'gateway',
			'note',
			'due_date',
			'expires',
			'timestamp',
		]

class ReferenceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reference
		fields = [
			'pk',
			'field',
			'abbreviation',
			'value',
			'reference_created',
		]

class LoggingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Logging
		fields = [
			'pk',
			'attendee_id',
			'table_name',
			'column_name',
			'original_value',
			'new_value',
			'log_created',
		]