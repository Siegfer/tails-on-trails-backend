const { Shelter, Walker } = require('./models')

const seeAllWalkers = async () => {
	let allData = await Walker.find({})
	console.log('🧚🏽‍♂️ -----------------------------------------')
	console.log('🧚🏽‍♂️ ~ seeAllWalkers ~ allData', allData)
	console.log('🧚🏽‍♂️ -----------------------------------------')
}
seeAllWalkers()
