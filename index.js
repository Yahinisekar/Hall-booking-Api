import express from 'express'
import cors from 'cors'
import { router } from './Routers/room.js';
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json())  //for parsing application/json



app.use('/api',router);
app.listen(PORT, () => {
    console.log(`server is running on port  ${PORT}`)
})



