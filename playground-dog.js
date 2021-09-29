const { Dog } = require('./models')
console.log('🧚🏽‍♂️ -----------------')
console.log('🧚🏽‍♂️ ~ Dog', Dog)
console.log('🧚🏽‍♂️ -----------------')

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
		console.log('🧚🏽‍♂️ --------------------------------------')
		console.log('🧚🏽‍♂️ ~ createNewDog ~ newDog', newDog)
		console.log('🧚🏽‍♂️ --------------------------------------')
	} catch (error) {
		console.log('🧚🏽‍♂️ ------------------------------------')
		console.log('🧚🏽‍♂️ ~ createNewDog ~ error', error)
		console.log('🧚🏽‍♂️ ------------------------------------')
	}
}
