const { Dog } = require('./models')
console.log(`🧚🏽‍♂️ ~ Dog`, Dog)

async function swapDog() {
	let currentDog = await Dog.findById(id)
	try {
		let Adoption = (err, result) => {
			let swap = new Adopted(result.toObject())
			swap._id = mongoose.Types.ObjectId()
			swap.isNew = true
		}

		result.remove()
		swap.save()
	} catch (error) {
		console.log(`🧚🏽‍♂️ ~ swapDog ~ error`, error)
	}
}
// swapDog()

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

async function createNewDog() {
	try {
		let newDog = await Dog.create({
			name: 'Artemis',
			breed: 'Husky',
			gender: 'Male',
			size: 'Medium',
			characteristic: [
				'Energetic',
				'Friendly',
				'Bark at other dogs',
				'House Train',
				'Know a few commands'
			],
			Age: 8,
			description:
				'thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. This northern breed is friendly, fastidious, and dignified.'
		})
		console.log(
			`🧚🏽‍♂️ ~ createNewDog ~ newDog`,
			newDog
		)
	} catch (error) {
		console.log('🧚🏽‍♂️ ~ createNewDog ~ error', error)
	}
}
createNewDog()

const seeAllDogs = async () => {
	let allData = await Dog.find({})
	console.log(`🧚🏽‍♂️ ~ seeAllDogs ~ allData`, allData)
}
seeAllDogs()
