import express from 'express'
import { bookRoom, bookedRoom, bookingCount, createRoom, customers } from '../Controllers/room.js'

export const router = express.Router()

router.post('/createroom',createRoom)
router.post('/bookroom',bookRoom)
router.get('/bookedrooms',bookedRoom)
router.get('/customers',customers)
router.get('/bookingcount',bookingCount)

