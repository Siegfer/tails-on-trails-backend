const mongoose = require('mongoose')
const { Schema } = mongoose

const addressSchema = new Schema({
	street: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	zipcode: {
		type: Number,
		required: true
	}
})

const shelterSchema = new Schema({
	shelterName: {
		type: String,
		required: true
	},
	License: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	addresses: [addressSchema],
	mobileNumber: {
		type: Number,
		required: true
	},
	schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
})

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter
