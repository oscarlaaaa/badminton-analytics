# BWF Badminton Analytics Dashboard
A badminton singles dashboard that allows users to look at individual player stats, see visualized trends and data, and provide an analytic head-to-head % chance of victory against another player using various regressive models. 

Right now the database only supports Singles events (Men's and Women's), but the API may expand to accommodate Doubles events in the future.

## Current Features
Nothing... Yet!

## Motivation
I've always wanted to see if there was a way to (attempt) to reasonably predict the winner of a badminton match, so this is my best attempt at making it a reality!

## How to Use
Right now, the projects is barebones so simply clone the repository, install dependencies using ```npm i```, and run ```npm start``` before opening up ```localhost:3000```.

## Progress Roadmap
- [x] Initialize project!
- [ ] Build out the basic pages (landing, search, player display, head-to-head comparison)
- [ ] Incorporate Redux for state management (doesn't solve any immediate issues, but good practice!)
- [ ] Stylize components
- [ ] Initialize analytic lambda to person model regression and fitting
- [ ] Establish linear and logistic regression models
- [ ] Establish Naive-Bayes and K-nearest-neighbours models
- [ ] Establish support-vector-machines model
- [ ] Attach lambda to custom URL
- [ ] Host lambda on AWS
- [ ] Host project page on Heroku or AWS with custom URL

## Technologies Used
* React.js (TypeScript), Redux
* Python
* AWS Lambda
* Heroku or AWS hosting

## What I've Learned
To be determined

## How Can I Contribute?
To be determined

## License
To be determined

## Credits
To be determined