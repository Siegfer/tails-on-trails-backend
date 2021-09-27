const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Pseudo Code for Shelter Schema
 * Base:
 *  - name: {type: string, require: true }
 * 	- mobileNumber: {type: number, require: true}
 * 	- provider: {type: Boolean, require: false}
 *
 * Shelter:
 * 	- inherit everything from base & add info bellow just for this schema:
 *  - address: [addressSchema]
 * 	- license: {type: string, require: true}
 *
 * walker:
 * 	- inherit everything from base & add info bellow just for this schema:
 * 	- cityLocation: {type: string, require: true}
 *
 * dog:
 * 	- dog already have a separate schema set up for them
 *
 */

const baseOptions = {
	// our discriminator key, could be anything
	discriminatorKey: 'roleType',
	// the name of our collection
	collection: 'roles'
}

const baseSchema = new Schema({})

const Base = mongoose.model('Base', baseSchema)

module.exports = Base
