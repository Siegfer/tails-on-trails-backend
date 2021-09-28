const mongoose = require('mongoose')
const { Schema } = mongoose

const scheduleSchema = new Schema({
	// definitely look more into creating working Schema for schedule
	date: new Date(),
	time: new Date()
})

module.exports = mongoose.model('Schedule', scheduleSchema)
