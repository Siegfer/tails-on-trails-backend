require('dotenv').config()
const express = require('express')
const router = express()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const passport = require('passport')
const { Walker } = require('../models')

router.get('/', async (req, res) => {
	try {
		let allData = await Walker.find({})
		res.status(200).json({
			information: allData
		})
	} catch (error) {
		console.log('🧚🏽‍♂️ ----------------------------------')
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		console.log('🧚🏽‍♂️ ----------------------------------')
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		res.status(500),
			json({
				message: 'Something went wrong. Please try again later!'
			})
	}
	y
})

router.get('/test', async (req, res) => {
	res.json({ message: 'Testing users controller' })
})

router.post('/signup', async (req, res) => {
	// POST - adding the new user to the database
	console.log('===> Inside of /signup')
	console.log(req.body)

	Walker.findOne({ email: req.body.email })
		.then((user) => {
			// if email already exists, a user will come back
			if (user) {
				// send a 400 response
				return res.status(400).json({ message: 'Email already exists' })
			} else {
				// Create a new user
				const newUser = new Walker({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					city: req.body.city,
					volunteer: req.body.volunteer
				})

				// Salt and hash the password - before saving the user
				bcrypt.genSalt(10, (err, salt) => {
					if (err) throw Error

					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) console.log('==> Error inside of hash', err)
						// Change the password in newUser to the hash
						newUser.password = hash
						newUser
							.save()
							.then((createdUser) => res.json(createdUser))
							.catch((err) => console.log(err))
					})
				})
			}
		})
		.catch((err) => {
			console.log('Error finding user', err)
			res.json({ message: 'An error ocurred. Please try again.' })
		})
})

router.post('/login', async (req, res) => {
	// POST - finding a user and returning the user
	console.log('===> Inside of /login')
	console.log(req.body)

	const foundUser = await Walker.findOne({ email: req.body.email })

	if (foundUser) {
		// user is in the DB
		let isMatch = await bcrypt.compare(req.body.password, foundUser.password)
		console.log('Match User', isMatch)
		if (isMatch) {
			// if user match, then we want to send a JSON Web Token
			// Create a token payload
			// add an expiredToken = Date.now()
			// save the user
			const payload = {
				id: foundUser.id,
				email: foundUser.email,
				name: foundUser.name,
				city: foundUser.city,
				volunteer: req.body.volunteer
			}

			jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
				if (err) {
					res
						.status(400)
						.json({ message: 'Session has ended, please log in again' })
				}
				const legit = jwt.verify(token, JWT_SECRET, { expiresIn: 60 })
				console.log('===> legit')
				console.log(legit)
				res.json({ success: true, token: `Bearer ${token}`, userData: legit })
			})
		} else {
			return res.status(400).json({ message: 'Email or Password is incorrect' })
		}
	} else {
		return res.status(400).json({ message: 'User not found' })
	}
})

router.get(
	'/profile',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		console.log('====> inside /profile')
		console.log('====> user', req.user)
		const { id, name, email, volunteer, city } = req.user // object with user object inside
		res.json({ id, name, email, volunteer, city })
	}
)

module.exports = router
