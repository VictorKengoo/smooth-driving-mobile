import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import ENV from '../../env'
import '../models/BrokerData'
const app = express()

const BrokerData = mongoose.model('BrokerData')
const mongoDBString = ENV.BROKER_MONGODB_STRING

