const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Pseudo Code for Shelter Schema
 * Base:
 *  - name: {type: string, require: true }
 * 	- mobileNumber: {type: number, require: true}
 * 	- provider: {type: Boolean, require: false}
 *
 * Shelter:
 * 	- inherit everything from base & add info bellow just for this schema:
 *  - address: [addressSchema]
 * 	- license: {type: string, require: true}
 *
 * walker:
 * 	- inherit everything from base & add info bellow just for this schema:
 * 	- cityLocation: {type: string, require: true}
 *
 * dog:
 * 	- dog already have a separate schema set up for them
 *
 */

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
