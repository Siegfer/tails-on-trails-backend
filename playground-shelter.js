const { Shelter } = require('./models')

async function createNewShelter() {
	try {
		let newShelter = await Shelter.create({
			name: 'South LA Animal Shelter',
			email: 'AnimalShelter@LA.com',
			mobileNumber: 8884527381,
			address: [
				{
					street: '1850 W 60th Street',
					city: 'Los Angeles',
					state: 'California',
					zipcode: 90047
				}
			],
			provider: true,
			license: 'asidasdflkjewioqijds;fjoiewa'
		})
		console.log('🧚🏽‍♂️ ---------------------------------------')
		console.log('🧚🏽‍♂️ ~ async ~ newShelter', newShelter)
		console.log('🧚🏽‍♂️ ---------------------------------------')
	} catch (error) {
		console.log('🧚🏽‍♂️ -----------------------------')
		console.log('🧚🏽‍♂️ ~ async ~ error', error)
		console.log('🧚🏽‍♂️ -----------------------------')
	}
}

createNewShelter()
