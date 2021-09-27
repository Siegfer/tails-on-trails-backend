const mongoose = require('mongoose')
const { Schema } = mongoose

const scheduleSchema = new Schema({
	// definitely look more into creating working Schema for schedule
	date: new Date(),
	time: new Date()
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
