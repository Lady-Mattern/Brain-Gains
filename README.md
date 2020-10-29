# Brain Gains
## The quiz app that trains your brain to build those gains!

## Deployed to Netlify
Play the game live here: 

## Technology Used
HTML
JSX
CSS
Sass
JavaScript
React
Create React App

## User Stories
- Users can see one question at a time
- Each question will have four multiple choice answer options
- Each quiz round will be 10 questions in length
- No repeated questions per round
- Users can select one answer at a time
- If the answer choice is not correct, the correct choice must be displayed
- The user can see their score after completing the round

## Challenges

### Challenge: 

I think first and foremost, the setup was the biggest hurtle. How will I be accessing the data? How should I have the components render? What framework (if any) would I want to use to create the app in the first place? What functionality can I provide considering my current time constraints?

### Solution:

I took out a pen and paper and drew out what I wanted the user to see. I did some research on some different approaches to creating the game. (Using React, vanilla JS, etc.) Next, I penned out how I wanted the control flow to go when the user started the game and sketched out some possible functionality. Then I set up the bones of my app and worked from there.

### Challenge:

 My next hurtle was accessing the data. I debated with myself for quite a while as to the best way to access the data inside the given structure. Should I keep all the data within my App component or store it in another file? How do I access the data once I store it somewhere else?

 ### Solution:

In the end, I decided to store the data as a JSON file in the public folder so that it wouldn't take up real estate in the App file. I then found a way to use my fetch api to pull from my local files instead of a URL. Then, it was a matter of drilling down to the right data points and rendering them first in the console and then on the screen. One hang up that I had was remembering that the page render would take place before the api call so I would get an error on page load because the data was coming back as undefined. I placed a conditional statement in the component that cause the render to wait until the data was greater than 0 and that fixed the issue.
