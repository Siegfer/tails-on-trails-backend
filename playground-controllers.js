const { Shelter, Walker } = require('./models')
console.log(`🧚🏽‍♂️ ~ Walker`, Walker)
console.log(`🧚🏽‍♂️ ~ Shelter`, Shelter)

const seeAllWalkers = async () => {
	let allData = await Walker.find({})
	console.log(
		'🧚🏽‍♂️ ~ seeAllWalkers ~ allData',
		allData
	)
}
seeAllWalkers()
