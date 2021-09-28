require('dotenv').config()
const { Strategy, ExtractJwt } = require('passport-jwt')
const mongoose = require('mongoose')
const { Shelter } = require('../models')

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
}

module.exports = (passport) => {
	passport.use(
		new Strategy(options, (jwt_payload, done) => {
			Shelter.findById(jwt_payload.id)
				.then((user) => {
					if (user) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
				.catch((error) => {
					console.log('=====> Error below (passport.js)')
					console.log(error)
				})
		})
	)
}
