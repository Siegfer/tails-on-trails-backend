const { Dog, Adopted } = require('./models')

Dog.findOne({ _id: id }, function (err, result) {
	let swap = new Adopted(result.toObject())
	swap._id = mongoose.Types.ObjectId()
	swap.isNew = true

	result.remove()
	swap.save()
})

async function createNewDog() {
	try {
		let newDog = await Dog.create({
			name: 'Apollo',
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
	} catch (error) {
		console.log('🧚🏽‍♂️ ~ createNewDog ~ error', error)
	}
}
