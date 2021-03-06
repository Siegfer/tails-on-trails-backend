require('dotenv').config()
const express = require('express')
const router = express()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const passport = require('passport')
const { Shelter, Walker, Dog } = require('../models')
const mongoose = require('mongoose')

router.get('/test', async (req, res) => {
	res.json({ message: 'Testing users controller' })
})

router.post('/signup', async (req, res) => {
	console.log('===> Inside of shelters/signup')
	console.log(req.body)

	Shelter.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				return res.status(400).json({ message: 'Email already exists' })
			} else {
				const newUser = new Shelter({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					city: req.body.city,
					volunteer: req.body.volunteer
				})

				bcrypt.genSalt(10, (err, salt) => {
					if (err) throw Error

					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) console.log('==> Error inside of hash', err)
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
			res.json({
				message: 'An error ocurred. Please try again.'
			})
		})
})

router.post('/login', async (req, res) => {
	console.log('===> Inside of shelters/login')
	console.log(req.body)

	const foundUser = await Shelter.findOne({
		email: req.body.email
	})

	if (foundUser) {
		let isMatch = await bcrypt.compare(req.body.password, foundUser.password)
		console.log('Match User', isMatch)
		if (isMatch) {
			const payload = {
				id: foundUser.id,
				email: foundUser.email,
				name: foundUser.name,
				city: foundUser.city,
				volunteer: foundUser.volunteer
			}

			jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
				if (err) {
					res.status(400).json({
						message: 'Session has ended, please log in again'
					})
				}
				const legit = jwt.verify(token, JWT_SECRET, {
					expiresIn: 60
				})
				console.log('===> legit')
				console.log(legit)
				res.json({
					success: true,
					token: `Bearer ${token}`,
					userData: legit
				})
			})
		} else {
			return res.status(400).json({
				message: 'Email or Password is incorrect'
			})
		}
	} else {
		return res.status(400).json({ message: 'User not found' })
	}
})

router.get('/dogs', passport.authenticate('jwt', { session: false }), async (req, res) => {
	console.log('====> inside shelters/dogs')
	console.log('====> user', req.user)
	try {
		let { _id } = req.user
		let currentUser = await Shelter.findById(_id)
		let updateUser = await currentUser.populate('dog')
		console.log(currentUser)
		res.status(200).json({
			update: updateUser
		})
	} catch (error) {
		console.log('????????????????? ~ router.get ~ error', error)
		res.status(500).json({
			message: 'Something went wrong. Please try again later!'
		})
	}
})

router.get(
	'/adopted',
	// passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		console.log('====> inside shelters/adopted')
		console.log('====> user', req.user)
		try {
			let allData = await mongoose.model('Adopt').find({})
			res.status(200).json({
				adopted: allData
			})
		} catch (error) {
			console.log('????????????????? ~ router.get ~ error', error)
			res.status(500).json({
				message: 'Something went wrong. Please try again later!'
			})
		}
	}
)

router.get('/volunteer', passport.authenticate('jwt', { session: false }), async (req, res) => {
	console.log('====> inside shelters/volunteer')
	console.log('====> user', req.user)
	try {
		let allData = await Walker.find({})
		res.status(200).json({
			volunteers: allData
		})
	} catch (error) {
		console.log('????????????????? ~ router.get ~ error', error)
		res.status(500).json({
			message: 'Something went wrong. Please try again later!'
		})
	}
})

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log('====> inside shelters/profile')
	console.log('====> user', req.user)

	const { id, name, email, provider, city } = req.user
	res.json({ id, name, email, provider, city })
})

router.post('/add', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		console.log('====> inside shelters/add')
		console.log('====> user', req.user)

		let { _id } = req.user
		let currentUser = await Shelter.findById(_id)
		let newDog = await Dog.create({
			name: req.body.name,
			breed: req.body.breed,
			gender: req.body.gender,
			size: req.body.size,
			characteristic: req.body.characteristic,
			age: req.body.age,
			description: req.body.description
		})
		console.log(currentUser.dog)
		currentUser.dog.push(newDog._id)
		currentUser.save()
		let updateDog = await currentUser.populate('dog')
		console.log(currentUser)
		res.status(200).json({
			update: updateDog
		})
	} catch (error) {
		console.log('????????????????? ~ error', error)
	}
})

module.exports = router
