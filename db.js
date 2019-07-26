const mongoose = require("mongoose")
const DB_NAME = process.env.DB_NAME
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongodb Connected successfully'))
