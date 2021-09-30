require('dotenv').config()
const {
	Strategy,
	ExtractJwt
} = require('passport-jwt')
const mongoose = require('mongoose')
const { Shelter, Walker } = require('../models')

const options = {
	jwtFromRequest:
		ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
}

module.exports = (passport) => {
	passport.use(
		new Strategy(options, (jwt_payload, done) => {
			// Walker.findById(jwt_payload.id)
			Shelter.findById(jwt_payload.id)
				.then((user) => {
					if (user) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
				.catch((error) => {
					console.log(error)
				})
		})
	)
}

// module.exports = (passport2) => {
// 	passport2.use(
// 		new Strategy(options, (jwt_payload, done) => {
// 			Walker.findById(jwt_payload.id)
// 				.then((user) => {
// 					if (user) {
// 						return done(null, user)
// 					} else {
// 						return done(null, false)
// 					}
// 				})
// 				.catch((error) => {
// 					console.log(error)
// 				})
// 		})
// 	)
// }
