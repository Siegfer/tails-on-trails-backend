const { Walker } = require('./models')

async function createNewWalker() {
	try {
		let newWalker = await Walker.create({
			name: 'Nicholas',
			email: 'Nick@gmail.com',
			mobileNumber: '7894561231'
		})
		console.log('🧚🏽‍♂️ -----------------------------------------------')
		console.log('🧚🏽‍♂️ ~ createNewWalker ~ newWalker', newWalker)
		console.log('🧚🏽‍♂️ -----------------------------------------------')
	} catch (error) {
		console.log('🧚🏽‍♂️ ---------------------------------------')
		console.log('🧚🏽‍♂️ ~ createNewWalker ~ error', error)
		console.log('🧚🏽‍♂️ ---------------------------------------')
	}
}

createNewWalker()
