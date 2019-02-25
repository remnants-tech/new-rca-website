from django.urls import path, include

from django.conf.urls import url
from .views import UserRudView, ProfileRudView, RegistrationRudView, EventRudView, TicketRudView, ReferenceRudView, TransactionRudView, LoggingRudView
from .views import UserCreateView, ProfileCreateView, EventCreateView, TicketCreateView, RegistrationCreateView, TransactionCreateView, ReferenceCreateView, LoggingCreateView

urlpatterns = [
	path('user/', include('rest_auth.urls')),
	path('user/registration/', include('rest_auth.registration.urls')),
	path('profile/', ProfileCreateView.as_view(), name="profile-create"),
	path('profile/<int:pk>/', ProfileRudView.as_view(), name="profile-crud"),
	path('event/', EventCreateView.as_view(), name="event-create"),
	path('event/<int:pk>/', EventRudView.as_view(), name="event-crud"),
	path('ticket/', TicketCreateView.as_view(), name="ticket-create"),
	path('ticket/<int:pk>/', TicketRudView.as_view(), name="ticket-crud"),
	path('registration/', RegistrationCreateView.as_view(), name="registration-create"),
	path('registration/<int:pk>/', RegistrationRudView.as_view(), name="registration-crud"),
	path('transaction/', TransactionCreateView.as_view(), name="transaction-create"),
	path('transaction/<int:pk>/', TransactionRudView.as_view(), name="transaction-crud"),
	path('reference/', ReferenceCreateView.as_view(), name="reference-create"),
	path('reference/<int:pk>/', ReferenceRudView.as_view(), name="reference-crud"),
	path('logging/', LoggingCreateView.as_view(), name="logging-create"),
	path('logging/<int:pk>/', LoggingRudView.as_view(), name="logging-crud"),
]