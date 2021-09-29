const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

const shelter = Base.discriminator(
	'ShelterBase',
	new Schema({
		provider: { type: Boolean, require: true }
	})
)

module.exports = mongoose.model('ShelterBase')
