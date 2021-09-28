const mongoose = require('mongoose')
const { Schema } = mongoose

const dogSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	breed: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	size: {
		type: String,
		required: true
	},
	characteristic: {
		type: Array,
		required: true
	},
	Age: {
		type: number
	},
	description: {
		type: String,
		required: true
	},
	schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
})

module.exports = mongoose.model('Dog', dogSchema)
