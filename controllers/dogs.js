const express = require('express')
const router = express()
const mongoose = require('mongoose')

router.get('/', async (req, res) => {
	try {
		let allData = await mongoose.model('Dog').find({})
		res.status(200).json({
			dogs: allData
		})
	} catch (error) {
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		res.status(500).json({
			message: 'Something went wrong!! Please try again.'
		})
	}
})

router.get('/adopted', async (req, res) => {
	try {
		let allData = await mongoose.model('Adopt').find({})
		res.status(200).json({
			adopted: allData
		})
	} catch (error) {
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		res.status(500).json({
			message: 'Something went wrong. Please try again later!'
		})
	}
})

module.exports = router
