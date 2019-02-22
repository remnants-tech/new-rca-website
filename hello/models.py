from django.conf import settings
from django.db import models

import os
import psycopg2
from psycopg2 import sql
from psycopg2 import Error
#import urlparse
import urllib.parse
from django.contrib.auth.hashers import make_password, check_password
import time

from django.contrib.auth.models import (
	AbstractBaseUser, BaseUserManager
)

class UserManager(BaseUserManager):
	# take into consideration first name and last name
	def create_user(self, email, first_name, last_name, password=None, is_active=True, is_staff=False, is_admin=False):
		if not email:
			raise ValueError("Users must have an email address")
		if not password:
			raise ValueError("Users must have a password")
		if not first_name:
			raise ValueError("Users must enter a first name")
		if not last_name:
			raise ValueError("Users must enter a last name")
		user_obj = self.model(
			email = self.normalize_email(email),
			first_name = first_name,
			last_name = last_name
		)
		user_obj.set_password(password)
		user_obj.staff = is_staff
		user_obj.admin = is_admin
		user_obj.active = is_active
		user_obj.save(using=self._db)
		return user_obj

	def create_staffuser(self, email, first_name, last_name, password=None):
		user = self.create_user(
				email,
				first_name,
				last_name,
				password=password,
				is_staff=True
		)
		return user

	def create_superuser(self, email, first_name, last_name, password=None):
		user = self.create_user(
			email,
			first_name,
			last_name,
			password=password,
			is_staff=True,
			is_admin=True,
		)
		return user

class User(AbstractBaseUser):
	email			= models.EmailField(max_length=255, unique=True)
	first_name		= models.CharField(max_length=255)
	last_name		= models.CharField(max_length=255)
	active			= models.BooleanField(default=True)
	staff			= models.BooleanField(default=False)
	admin			= models.BooleanField(default=False)
	confirm			= models.BooleanField(default=False)
	confirmed_date	= models.DateTimeField(blank=True, null=True)
	changed			= models.DateTimeField(auto_now=True)
	created 		= models.DateTimeField(auto_now_add=True)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name', 'last_name'] # Will affect python manage.py createsuperuser

	objects = UserManager()

	def __str__(self):
		return self.email

	def get_full_name(self):
		return self.first_name + ' ' + self.last_name

	def get_short_name(self):
		return self.first_name

	def has_perm(self, perm, obj=None):
		return True

	def has_module_perms(self, app_label):
		return True

	@property
	def is_staff(self):
		return self.staff

	@property
	def is_admin(self):
		return self.admin

	@property
	def is_active(self):
		return self.active


class Attendee(models.Model):
	email = models.CharField(max_length=50, unique=True)
	password = models.CharField(max_length=100)
	first_name = models.CharField(max_length=20)
	last_name = models.CharField(max_length=20)
	korean_name = models.CharField(max_length=20, blank=True, default='')
	dob = models.DateField('date of birth')
	gender = models.CharField(max_length=6)
	language = models.CharField(max_length=10)
	phone_number = models.CharField(max_length=20)
	interest = models.CharField(max_length=50)
	church = models.CharField(max_length=100)
	church_position = models.CharField(max_length=50, blank=True, default='')
	training = models.TextField(blank=True, default='')
	leader = models.BooleanField(blank=True, default='')
	staff = models.BooleanField(blank=True, default='')
	school = models.CharField(max_length=50, blank=True, default='')
	grade = models.CharField(max_length=20, blank=True, default='')
	major = models.CharField(max_length=50, blank=True, default='')
	company = models.CharField(max_length=50, blank=True, default='')
	company_position = models.CharField(max_length=50, blank=True, default='')
	shirt_size = models.CharField(max_length=10, blank=True, default='')
	address = models.CharField(max_length=100, blank=True, default='')
	city = models.CharField(max_length=50, blank=True, default='')
	state = models.CharField(max_length=50, blank=True, default='')
	zip_code = models.IntegerField(blank=True, default='')
	#Need to make attendee_created based on datetimefield of creation
	attendee_created = models.DateTimeField(auto_now_add=True)

	# Need to add self reference __str__
	def __str__(self):
		return self.email

class Event(models.Model):
	name = models.CharField(max_length=200)
	address = models.CharField(max_length=200)
	city = models.CharField(max_length=100)
	zip_code = models.IntegerField()
	language = models.CharField(max_length=50)
	event_description = models.TextField(blank=True)
	event_start = models.DateField()
	event_end = models.DateField()
	event_start_time = models.TimeField()
	event_end_time = models.TimeField()
	event_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name

class Ticket(models.Model):
	event_id = models.ForeignKey(Event, on_delete=models.PROTECT)
	ticket_name = models.CharField(max_length=200)
	ticket_description = models.TextField()
	ticket_price = models.IntegerField()
	ticket_start = models.DateField()
	ticket_end = models.DateField()
	ticket_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.ticket_name

class Registration(models.Model):
	attendee_id = models.ForeignKey(Attendee, on_delete=models.PROTECT)
	event_id = models.ForeignKey(Event, on_delete=models.PROTECT)
	ticket_id = models.ForeignKey(Ticket, on_delete=models.PROTECT)
	paid = models.BooleanField()
	staff = models.BooleanField()
	team_id = models.IntegerField(blank=True, null=True)
	room = models.CharField(max_length=20, blank=True)
	shirt_size = models.CharField(max_length=10)
	health = models.TextField(blank=True)
	prayer_topic = models.CharField(max_length=200, blank=True)
	#registration_created should be based on datetime created
	registration_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.pk)

class Transaction(models.Model):
	attendee_id = models.ForeignKey(Attendee, on_delete=models.PROTECT)
	event_id = models.ForeignKey(Event, on_delete=models.PROTECT)
	ticket_id = models.ForeignKey(Ticket, on_delete=models.PROTECT)
	gateway_id = models.IntegerField()
	payment_type = models.CharField(max_length=100)
	total_amount = models.DecimalField(max_digits=10, decimal_places=2)
	currency = models.CharField(max_length=20)
	status = models.CharField(max_length=50)
	gateway = models.CharField(max_length=100)
	note = models.TextField(blank=True)
	due_date = models.DateField()
	expires = models.DateField()
	timestamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.pk

# Need to make a class model for holding customer billing information - Security check/research
# Need to look into payment API packages

# This table will hold all static data references like language, grade, specialty, shirt size, position
class Reference(models.Model):
	field = models.CharField(max_length=50)
	abbreviation = models.CharField(max_length=10, blank=True)
	value = models.CharField(max_length=200)
	reference_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.value

class Logging(models.Model):
	attendee_id = models.ForeignKey(Attendee, on_delete=models.PROTECT)
	table_name = models.CharField(max_length=100)
	column_name = models.CharField(max_length=100)
	original_value = models.TextField()
	new_value = models.TextField()
	log_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.log_created
