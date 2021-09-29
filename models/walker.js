const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

const Walker = Base.discriminator(
	'WalkerBase',
	new Schema({
		volunteer: { type: String, required: true }
	})
)

module.exports = mongoose.model('WalkerBase')
