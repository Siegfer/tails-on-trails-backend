const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

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

const Shelter = Base.discriminator(
	'Shelter',
	new Schema({
		address: [addressSchema],
		license: {
			type: String,
			require: true
		}
	})
)

module.exports = mongoose.model('Shelter')
