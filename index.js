import express from 'express'
import cors from 'cors'
import { router } from './Routers/room.js';
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json())  //for parsing application/json

app.get('/', (req, res) => {
    res.status(200)
      .send(`<div style="text-align:center;">NodeJs Hall Booking API</div>
    <ul>
    <li> Create a room  : <mark>/createRoom</mark> </li>
    <li> book rooms   : <mark>/bookroom </mark></li>
    <li> List booked rooms   : <mark>/bookedrooms </mark></li>
    <li> List customers   : <mark>/customer </mark></li>
    <li> List booking count   : <mark>/bookingcount </mark></li>
    </ul>`);
})

app.use('/api',router);
app.listen(PORT, () => {
    console.log(`server is running on port  ${PORT}`)
})



