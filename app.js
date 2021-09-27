require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// import models

// routes & controllers
app.get('/', (req, res) => {
	res.json({
		name: 'tailsontrails API',
		message: 'Welcome, let look at some dogs!!'
	})
})

const PORT = process.env.PORT || 8000

// listen to port
app.listen(PORT, () => console.log(`Listening on PORT`, PORT))
