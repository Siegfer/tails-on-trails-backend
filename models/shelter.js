const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

const shelter = Base.discriminator(
	'ShelterBase',
	new Schema({
		volunteer: { type: Boolean, default: false },
		dog: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Dog'
			}
		]
	})
)

module.exports = mongoose.model('ShelterBase')
