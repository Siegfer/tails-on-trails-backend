const mongoose = require('mongoose')
const { Schema } = mongoose

const scheduleSchema = new Schema({
	monday: {
		type: Boolean,
		default: true
	},
	tuesday: {
		type: Boolean,
		default: false
	},
	wednesday: {
		type: Boolean,
		default: false
	},
	thursday: {
		type: Boolean,
		default: false
	},
	friday: {
		type: Boolean,
		default: false
	},
	saturday: {
		type: Boolean,
		default: false
	},
	sunday: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('Schedule', scheduleSchema)
