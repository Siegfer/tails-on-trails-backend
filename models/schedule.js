const mongoose = require('mongoose')
const { Schema } = mongoose

const scheduleSchema = new Schema({
	// definitely look more into creating working Schema for schedule
	schedule_begin: Date,
	schedule_end: Date,
	schedule_days_runs: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	]
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
