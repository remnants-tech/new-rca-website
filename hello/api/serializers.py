# from django.contrib.auth import get_user_model, authenticate
# from django.conf import settings
# from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
# from django.contrib.auth.tokens import default_token_generator
# from django.utils.http import urlsafe_base64_decode as uid_decoder
# from django.utils.translation import ugettext_lazy as _
# from django.utils.encoding import force_text

from rest_framework import serializers, exceptions
from rest_framework.exceptions import ValidationError

from rest_auth.serializers import UserDetailsSerializer
from rest_auth.registration.serializers import RegisterSerializer

from django.contrib.auth.models import User
from hello.models import Event, Ticket, Registration, Transaction, Reference, Logging, Profile

from allauth.account import app_settings as allauth_settings
from allauth.utils import (email_address_exists,
							get_username_max_length)
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from allauth.socialaccount.helpers import complete_social_login
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.base import AuthProcess


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = [
			'pk',
			'email',
			'first_name',
			'last_name',
			'active',
			'staff',
			'admin',
			'confirm',
			'confirmed_date',
			'changed',
			'created',
		]

class CustomProfileSerializer(serializers.ModelSerializer):


	user = UserSerializer(required=True)

	class Meta:
		model = Profile
		fields = [
			'user',
			'korean_name',
			'dob',
			'gender',
			'language',
			'phone_number',
			'interest',
			'church'
			]

	def create(self, validated_data):
		user_data = validated_data.pop('user')
		user = User.objects.create(**user_data)
		profile, created = Profile.objects.update_or_create(user=user, **validated_data)
		return profile

class ProfileSerializer(serializers.ModelSerializer):
	# user = UserSerializer(required=True)

	class Meta:
		model = Profile
		fields = [
			'pk',
			'user',
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
			'last_updated',
		]
		extra_kwargs = {
            'user': {
                'default': serializers.CreateOnlyDefault(
                    serializers.CurrentUserDefault()
                ),
                # perhaps add 'read_only': True here too.
            }
        }

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