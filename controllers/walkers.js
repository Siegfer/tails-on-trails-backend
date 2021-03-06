require('dotenv').config()
const express = require('express')
const router = express()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const passport = require('passport')
const { Walker } = require('../models')

router.get('/logout', (req, res) => {
	console.log('===> LOGGING OUT!!')
	req.logOut()
	res.redirect('/')
})

router.get('/test', async (req, res) => {
	res.json({ message: 'Testing users controller' })
})

router.post('/signup', async (req, res) => {
	console.log('===> Inside of walkers/signup')
	console.log(req.body)

	Walker.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				return res.status(400).json({ message: 'Email already exists' })
			} else {
				const newUser = new Walker({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					city: req.body.city,
					mobile: Number(req.body.mobile),
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
	console.log('===> Inside of walkers/login')
	console.log(req.body)

	const foundUser = await Walker.findOne({
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

router.get(
	'/home',
	passport.authenticate('jwt', {
		session: false
	}),
	async (req, res) => {
		console.log('====> inside walkers/home')
		console.log('====> user', req.user)
		try {
			let allData = await Schedule.find({})
			res.status(200).json({
				information: allData
			})
		} catch (error) {
			console.log('????????????????? ~ router.get ~ error', error)
			res.status(500).json({
				message: 'Something went wrong. Please try again later!'
			})
		}
	}
)

router.get(
	'/profile',
	passport.authenticate('jwt', {
		session: false
	}),
	(req, res) => {
		console.log('====> inside walkers/profile')
		console.log('====> user', req.user)
		const { id, name, email, volunteer, city } = req.user
		res.json({ id, name, email, volunteer, city })
	}
)

module.exports = router
