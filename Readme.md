
# Hall Booking Api

This is a simple hall booking api built using Node.js and Express. It provides RESTful API endpoints for creating rooms, booking rooms, and retrieving booking information.

## Documentation

You can see my postman documentation [here](https://documenter.getpostman.com/view/31934748/2sA2xk1Bm8)

## Endpoints
### Create a Room
- Method: `POST`
- Endpoint:  `/api/createroom`
- Description: Create a new room with the provided details.
  
#### Request Body:

```
{
    "seats": 100,
    "amenities": ["TV", "Projector"],
    "price_per_hour": 1000
}
```
#### Response:
```
{
    "message": "Room created successfully",
    "room": {
        "room_id": 1,
        "seats": 100,
        "amenities": ["TV", "Projector"],
        "price_per_hour": 1000,
        "status": "available"
    }
}
```
### Book a Room

- Method:`POST`
- Endpoint: `/api/bookroom`
- Description: Book a room with the provided details.
Request Body:
```
{
    "customer_name": "name",
    "date": "2024-03-15",
    "start_time": "10:00 AM",
    "end_time": "12:00 PM",
    "room_id": 1
}
```
Response:
```
{
    "message": "Room booked successfully",
    "booking": {
        "booking_id": 1,
        "customer_name": "name",
        "date": "2024-03-15",
        "start_time": "10:00 AM",
        "end_time": "12:00 PM",
        "room_id": 1
    }
}
```
### List all Rooms with Booked Data

- Method: `GET`
- Endpoint: `/api/bookedrooms`
- Description: Get a list of all rooms along with their booked data.

### List all Customers with Booked Data

- Method: `GET`
- Endpoint: `/api/customers`
- Description: Get a list of all customers along with their booked data.

### List how many times a Customer has Booked the Room

- Method:`GET`
- Endpoint: `/api/bookingcount`
- Description: Get a list of all bookings made by a specific customer along with all details.
