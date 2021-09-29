const mongoose = require('mongoose')
const { Schema } = mongoose

const baseOptions = {
	// our discriminator key, could be anything
	discriminatorKey: 'roleType',
	// the name of our collection
	collection: 'roles'
}

// Base Schema: these properties will be shared with the rest of the models
const baseSchema = new Schema(
	{
		name: { type: String, require: true },
		email: { type: String, require: true },
		password: { type: String, require: true },
		city: { type: String, require: true }
	},
	baseOptions
)

module.exports = mongoose.model('Base', baseSchema)
