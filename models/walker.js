const mongoose = require('mongoose')
const { Schema } = mongoose

const walkerSchema = new Schema({
	name: {
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

module.exports = mongoose.model('Walker', walkerSchema)
