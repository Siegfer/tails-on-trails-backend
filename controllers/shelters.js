const express = require('express')
const router = express()
const { Base, Shelter, Walker } = require('../models')

router.get('/', async (req, res) => {
	try {
		let allData = await Shelter.find({})
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

module.exports = router
