const { Schedule, Walker } = require('./models')

async function createNewSchedule() {
	try {
		let newSchedule = await Schedule.create({})
		console.log(
			'🧚🏽‍♂️ -----------------------------------------------------'
		)
		console.log(
			'🧚🏽‍♂️ ~ createNewSchedule ~ newSchedule',
			newSchedule
		)
		console.log(
			'🧚🏽‍♂️ -----------------------------------------------------'
		)
	} catch (error) {
		console.log(
			'🧚🏽‍♂️ -----------------------------------------'
		)
		console.log(
			'🧚🏽‍♂️ ~ createNewSchedule ~ error',
			error
		)
		console.log(
			'🧚🏽‍♂️ -----------------------------------------'
		)
	}
}
createNewSchedule()

async function addScheduleToWalker(id) {
	try {
		let currentUser = await Walker.findById(id)
		let newSchedule = await Schedule.create({})
		currentUser.schedule = newSchedule._id
		currentUser.save()
		let updateWalker = await currentUser.populate(
			'schedule'
		)
		console.log(currentUser)
	} catch (error) {
		console.log(error)
	}
}
// addScheduleToWalker('6154dbff77ee351232121116')
