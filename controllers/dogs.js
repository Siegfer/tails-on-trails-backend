const express = require('express')
const router = express()
const { Dog } = require('../models')

router.get('/', async (req, res) => {
	try {
		let allData = await mongoose.model('Dog').find({})
		res.status(200).json({
			dogs: allData
		})
	} catch (error) {
		console.log('🧚🏽‍♂️ ----------------------------------')
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		console.log('🧚🏽‍♂️ ----------------------------------')
		res.status(500).json({
			message: 'Something went wrong!! Please try again.'
		})
	}
})

module.exports = router
