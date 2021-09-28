const mongoose = require('mongoose')
const { Schema } = mongoose

// doesn't need discriminatorWalker
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

// doesn't need discriminator
module.exports = mongoose.model('Walker', walkerSchema)
