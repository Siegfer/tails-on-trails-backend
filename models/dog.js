const mongoose = require('mongoose')
const { Schema } = mongoose

const dogSchema = new Schema({
	dogName: {
		type: String,
		required: true
	},
	breed: String,
	img: String,
	gender: {
		type: String,
		require: true
	},
	size: String,
	characteristic: String,
	Age: Number,
	description: String
})

module.exports = mongoose.model('Dog', dogSchema)
module.exports = mongoose.model('Adopt', dogSchema)
