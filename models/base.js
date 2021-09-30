const mongoose = require('mongoose')
const { Schema } = mongoose

const baseOptions = {
	discriminatorKey: 'roleType',
	collection: 'roles'
}

const baseSchema = new Schema(
	{
		name: { type: String, require: true },
		email: { type: String, require: true },
		password: { type: String, require: true },
		city: { type: String, require: true }
	},
	baseOptions
)

module.exports = mongoose.model(
	'Base',
	baseSchema
)
