const mongoose = require('mongoose')
const { Schema } = mongoose

const walkerSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	mobileNumber: {
		type: Number,
		required: true
	},
	schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
})

const Walker = mongoose.model('Walker', walkerSchema)

module.exports = Walker
