const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

const Walker = Base.discriminator(
	'WalkerBase',
	new Schema({
		volunteer: { type: Boolean, default: true },
		mobile: Number
	})
)

module.exports = mongoose.model('WalkerBase')
