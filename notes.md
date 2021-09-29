# User Stories
- Shelter should be able to see all volunteers
- Shelter should be able to see all dogs currently at their shelter
- Shelter should be able to edit dogs currently at their shelter
- Shelter should be able to view Calendar of volunteers walkers
- Shelter should be able to view every appointment selected 
- Shelter should be able to see which dog have already been selected
- Shelter should be able to view walker profile and the dog they selected

# Schema pseudo Code to use discriminator

``` js
/**
 * Pseudo Code for Shelter Schema
 * Base:
 *  - name: {type: string, require: true }
 * 	- mobileNumber: {type: number, require: true}
 * 	- provider: {type: Boolean, require: false}
 *
 * Shelter:
 * 	- inherit everything from base & add info bellow just for this schema:
 *  - address: [addressSchema]
 * 	- license: {type: string, require: true}
 *
 * walker:
 * 	- inherit everything from base & add info bellow just for this schema:
 * 	- cityLocation: {type: string, require: true}
 *
 * dog:
 * 	- dog already have a separate schema set up for them
 *
 */
```

walkers log in
walkers create their availability
edit same format
delete the form

shelter create dog profile
delete dog /adopt dog profile

shelter log ino their profile see all volunteer