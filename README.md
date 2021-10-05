# Tails on Trails Backend

This is the backend repository for the Tails on Trails app. It contains the code necessary for the server to manipulate the data for the app. It was designed to work with the app's [frontend repository](https://github.com/Siegfer/tails-on-trails-front). To use the entire app, visit the [Tails on Trails](https://tails-on-trails-front.herokuapp.com/) site.



## About

Tails on Trails is an app for shelters to help them keep track of all their current dogs & volunteers. It was made through the collaborative efforts of Robert Estrella and Nicholas Tran.

## Installation

### Create Local Repo

1. Fork and clone this repository and the corresponding [frontend repository](https://github.com/Siegfer/tails-on-trails-front) to your local computer.
2. Run `npm i` to install all necessary dependencies
3. Set up a `.env` file to hold the `REACT_APP_SERVER_URL` variable (set to `http://localhost:8000`).

### Set Up Local Database

1. Ensure you have MongoDB installed on your local computer by typing `mongosh` into your terminal to launch the Mongo shell (install MongoDB if necessary)
2. Upon running the backend repo (see next step), a new database named `tailsontrails` should automatically appear in your local MongoDB (confirm by typing `show dbs` while in the Mongo shell)

### Run Locally

1. Run `npm start` from within both the backend directory and the frontend directory
2. View the live version of the site at `http://localhost:3000` in the browser of your choosing

Alternatively, you may use the live version of the [Tails on Trails](https://tails-on-trails-front.herokuapp.com/) app.

## Explanation

What is Tails on Trails?
Here at Tails on Trails we offer the very best in help Shelters keep track of all their dogs and allow volunteers to sign up to walk them We started Tails on Trails with a single purpose, to provide the finest website for Shelters keep track of all their dogs and for potential volunteers If you are like us then you love animals and want all Shelters to be empty! If this is the case, we’ve got you covered! We want to help shelters increase adoption rate by having volunteers helps giving dogs in shelters some attention
Thats Where You Come In!
Your roll as a Volunteer is important to both dogs and shelters. Shelters don't have enough people to volunteer, which means more dogs aren't getting their daily needs fullfilled. You're here to fix that problem! Yay for doggies!

## Features

- Models for shelters, walkers and dogs
- Flexible schemas to allow users to upload a variety of fields to the budget documents
- Routes for accessing models
- Authentication measures to protect user information

## Models

![ERD](/IMG/ERD.png)

## Routes

| Method | Path                | File        | Description                                                        |
| ------ | ------------------- | ----------- | ------------------------------------------------------------------ |
| POST   | /shelters/signup    | shelters.js | Sign up a new Shelter                                              |
| POST   | /walkers/signup     | walkers.js  | Sign up a new Walker                                               |
| POST   | /shelters/login     | shelters.js | Log in an existing Shelter                                         |
| POST   | /walkers/login      | walkers.js  | Log in an existing Walker                                          |
| GET    | /shelters/dogs      | shelters.js | Display all dogs data with shelter                                 |
| GET    | /dogs               | dogs.js     | Display all dogs currently in all shelter                          |
| GET    | /shelters/profile   | shelters.js | Display all data of shelter                                        |
| GET    | /walkers/profile    | walkers.js  | Display all data of walker                                         |
| GET    | /shelters/volunteer | shelters.js | Display all volunteers of shelter                                  |
| POST   | /shelters/add       | shelters.js | Add dogs to shelter database with association to specific shelter. |


# Dependencies

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- dotenv
- jwt-decode
- bootstrap
- framer-motion
- react
- react-switch
- semantic-ui-react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- react-transition-group
- recharts
- web-vitals

## Code Snippet

**Displaying Dogs that belongs to a specific Shelter**
```javascript
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
		console.log('🧚🏽‍♂️ ~ router.get ~ error', error)
		res.status(500).json({
			message: 'Something went wrong. Please try again later!'
		})
	}
})
```

**Protected routes**
```javascript
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log('====> inside shelters/profile')
	console.log('====> user', req.user)

	const { id, name, email, provider, city } = req.user
	res.json({ id, name, email, provider, city })
})
```

## Stretch Goals

- Add more type of volunteers
- Add ability to set allow volunteers to set when they are available
- Further customize the shelter & volunteers profile to display more relevant information
- Add additional features like ability to show all a chart of all dogs that have been adopted.
- While our app is designed for desktop use and not mobile use, we could make its design more responsive (it already is responsive, but it is not as mobile friendly as the user might want); alternatively, we could create a separate mobile version of the app