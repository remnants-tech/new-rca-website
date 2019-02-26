ENDPOINTS
Receives in JSON

Login
api/user/login/ (POST)
	email
	password
Returns Token key

Logout
api/user/logout/ (POST)



Event Registration
api/event/<pk:id>/register (POST)

Sample Event Registration JSON Post
	{
        "email": "c@gmail.com",
        "first_name": "Aerin",
        "last_name": "Lee",
        "korean_name": "",
        "dob": "1960-06-13",
        "gender": "Female",
        "language": "en",
        "phone_number": "427-115-1050",
        "interest": "Pharmacy",
        "church": "Christ Covenant Church of California",
        "church_position": "Remnant",
        "training": "1st Level Camp Training",
        "leader": false,
        "staff": false,
        "school": "Princeton University",
        "grade": "13",
        "major": "Chemical Engineering",
        "company": "",
        "company_position": "",
        "shirt_size": "S",
        "address": "1 Ohio Court",
        "city": "Libertyville",
        "state": "IL",
        "zip_code": 60048,
        "event_id": 1,
        "ticket_id": 1,
        "paid": true,
        "team_id": null,
        "room": "",
        "health": "",
        "prayer_topic": ""
	}