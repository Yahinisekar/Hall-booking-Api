//creating a room with a given 
const rooms = [
  {
        "room_id": 1,
        "seats": 100,
        "amenities": ['TV', 'Projector'],
        "status": "Available",
        "price_per_hr":1000
  },
  {
        "room_id": 2,
        "seats": 200,
        "amenities": ['TV', 'Projector', 'AC'],
        "status": "Not available",
        "price_per_hr":5000
  },
];

//function for creating a room
export const createRoom = (req,res) => {
    const { seats, amenities, status, price_per_hr } = req.body;
    const room = {
        room_id: rooms.length + 1,
        seats: seats,
        amenities: amenities,
        status: status || "Available",
        price_per_hr:price_per_hr

    }
    rooms.push(room);
    res.status(200).json({ message: "Room created successfully",data:room });
}

//function to book a room
const bookings = [];

// Book a Room post method
 export const bookRoom=(req, res) =>{
    const { customer_name, date, start_time, end_time, room_id } = req.body;
    const room = rooms.find(room => room.room_id === room_id);
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    // Check if the room is already booked for the given time slot
    const isRoomBooked = bookings.some(booking => booking.room_id === room_id &&
        booking.date === date &&
        ((start_time >= booking.start_time && start_time < booking.end_time) ||
        (end_time > booking.start_time && end_time <= booking.end_time)));

    if (isRoomBooked) {
        return res.status(400).json({ error: 'Room already booked for this time slot' });
    }

    const booking = {
        booking_id: bookings.length + 1,
        customer_name,
        date,
        start_time,
        end_time,
        room_id
    };
    bookings.push(booking);
    res.status(200).json({ message: 'Room booked successfully', booking });
}

//List all rooms with booked data
 export const bookedRoom = (req, res) => {
     res.status(200).json({ message:"Booking rooms list", bookings });
 }
// List all Rooms with Booked Data
// export function bookedRoom(req, res) {
//     const bookedRooms = [];
//     rooms.forEach(room => {
//         bookings.forEach(booking => {
//             if (booking.room_id === room.room_id) {
//                 bookedRooms.push({
//                     room_name: room.room_id,
//                     booked_status: 'Booked',
//                     customer_name: booking.customer_name,
//                     date: booking.date,
//                     start_time: booking.start_time,
//                     end_time: booking.end_time
//                 });
//             }
//         });
//     });
//     res.status(200).json({ booked_rooms: bookedRooms });
// }
//list all customers with booked data
 
export const customers = (req, res) => {
    const customer = bookings.map(booking => {
        const room = rooms.find(room => room.room_id == bookings.room_id)
        return {
            customer_name: booking.customer_name,
            room_name: room.room_id,
            date: booking.date,
            start_time: booking.start_time,
            end_time: booking.end_time
        };
    });
    res.status(200).json({ message:"Booked customers list",customer_bookings: customer });

        }
    //list how many times a customer booked the room

export const bookingCount=(req, res) => {
  const customerName = req.params.customerName;

  // Filter bookings by customer name
  const customerBookings = bookings.filter(
    (booking) => booking.customer_name === customerName
  );
  // Check if customer bookings are found
  if (customerBookings.length === 0) {
    return res
      .status(404)
      .json({ error: "No bookings found for the customer" });
  }

  // Map customer bookings to include room details
  const customerDetails = customerBookings.map((booking) => {
    const room = rooms.find((room) => room.room_id === booking.room_id);
    return {
      customer_name: booking.customer_name,
      room_name: room ? room.room_name : "Room Not Found",
      date: booking.date,
      start_time: booking.start_time,
      end_time: booking.end_time,
      booking_id: booking.booking_id,
      booking_date: booking.booking_date,
      booking_status: booking.status,
    };
  });

  return res
    .status(200)
    .json({
      message: "Booking count List",
      customer_bookings: customerDetails,
    });
};
// res.status(404).json({ message: "Customer is not booked" });


