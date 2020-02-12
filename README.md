# github-tracker

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/michaeldeitcher/github-tracker`
* `cd github-tracker`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Challenges
- How long did the project take you?
A little over three hours.
- What tradeoffs/choices did you make?
I decided to use Ember Octane after reading through the documentation. I could have gotten more accomplished by using rails, an older version of Ember, or even create-react-app. It looks as if the github api doesn't support filtering by event type. I was in the process of adding event type filtering in the ember code but ran out of time.   
- What went well?
Working on this project made me more familiar with the latest version of Ember. I enjoyed that. It was pretty straight forward to use the github api. 
- What could be improved in the project?
The event type filtering could be completed. The api code could make multiple requests to the github api to retrieve more than one page of data. The details of the events could be rendered as well.
I would like to use folders to nest the functionality of the github-events component to organize the code a bit better.  
