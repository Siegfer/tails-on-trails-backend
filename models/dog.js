const mongoose = require('mongoose')
const { Schema } = mongoose

const dogSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	breed: {
		type: String
	},
	gender: {
		type: String,
		require: true
	},
	size: {
		type: String,
		required: true
	},
	characteristic: {
		type: String
	},
	Age: {
		type: Number
	},
	description: {
		type: String
	}
})

module.exports = mongoose.model('Dog', dogSchema)
module.exports = mongoose.model(
	'Adopt',
	dogSchema
)
