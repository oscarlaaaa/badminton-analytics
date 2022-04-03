# BWF Badminton Analytics Dashboard
A badminton singles dashboard that allows users to look at individual player stats and see visualized trends and data through querying the [Badminton Singles API](https://api.badminton-api.com), and provide an analytic head-to-head % chance of victory against another player using machine learning models implemented by the [Badminton Analytics Lambda](https://github.com/oscarlaaaa/badminton-analytics-predictor).

## Current Features
You can search for players, and render their personal profile information, some of their recent matches, and best/worst/distribution for head-to-head opponents. That's pretty much it for now B)

## Motivation
I wanted to show my friend some badminton statistics from a professional player's instagram story, but the story expired before I was able to. As such, I decided to take it upon myself to make my own analytics dashboard to compile my own statistics, analyze cool data points, and make something fun to use!

## How to Use
Visit [here](http://analytics.badminton-api.com) to test out the project!
>Note: The site is hosted on a free dyno on Heroku, so the initial cold-start will take a bit. Thanks for being patient!

## Progress Roadmap
- [x] Initialize project!
- [x] Build out search page with basic search functionality
- [x] Build out player page
- [x] Build out various data visualizations of player info
- [ ] Build out head-to-head page
- [ ] Incorporate Redux for state management (doesn't solve any immediate issues, but good practice!)
- [ ] Stylize components
- [X] Initialize + implement predictive lambda
- [x] Host project page on Heroku or AWS with custom URL

## Technologies Used
* React (TypeScript)
* Redux (WIP)
* Mantine UI
* Heroku

## What I've Learned
- Container design pattern to separate data/functional logic

## How Can I Contribute?
Right now, the projects is barebones so simply clone the repository, install dependencies using ```npm i```, and submit a pull request!

## License
To be determined

## Credits
To be determined