require('dotenv').config()
const mongoose = require('mongoose')

let connectionString

if (process.env.NODE_ENV === 'production') {
	connectionString = process.env.DB_URL
} else {
	// connectionString = process.env.MONGO_URI
	connectionString = process.env.DB_URL
}

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
	console.log(`connected to MongoDB on ${db.host}:${db.port}`)
})

db.on('error', (error) => {
	console.log('Database error', error)
})

const Shelter = require('./shelter')
const Base = require('./base')
const Dog = require('./dog')
const Adopt = require('./dog')
const Walker = require('./walker')

module.exports = {
	Shelter,
	Base,
	Dog,
	Adopt,
	Walker
}
