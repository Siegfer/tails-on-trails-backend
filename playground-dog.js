const { Dog } = require('./models')
const mongoose = require('mongoose')

async function swapDog(id) {
	try {
		let currentDog = await mongoose.model('Dog').findById(id)
		let Adoption = new (mongoose.model('Adopt'))(currentDog.toObject())
		Adoption._id = mongoose.Types.ObjectId()
		Adoption.isNew = true
		currentDog.remove()
		Adoption.save()
	} catch (error) {
		console.log(`🧚🏽‍♂️ ~ swapDog ~ error`, error)
	}
}
swapDog('61562f963c3e9720a16a1370')

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
		console.log(`🧚🏽‍♂️ ~ createNewDog ~ newDog`, newDog)
	} catch (error) {
		console.log('🧚🏽‍♂️ ~ createNewDog ~ error', error)
	}
}
// createNewDog()

const seeAllDogs = async () => {
	let allData = await Dog.find({})
	console.log(`🧚🏽‍♂️ ~ seeAllDogs ~ allData`, allData)
}
// seeAllDogs()
