const mongoose = require('mongoose')
const { Schema } = mongoose
const Base = require('./base')

const Walker = Base.discriminator(
	'WalkerBase',
	new Schema({
		schedule: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Schedule'
		}
	})
)

module.exports = mongoose.model('WalkerBase')
