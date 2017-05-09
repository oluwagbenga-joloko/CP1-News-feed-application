[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Code Climate](https://codeclimate.com/github/andela-ojoloko/CP1-News-feed-application//badges/gpa.svg)](https://codeclimate.com/github/andela-ojoloko/CP1-News-feed-application/)
[![Test Coverage](https://codeclimate.com/github/andela-ojoloko/CP1-News-feed-application/coverage.svg)](https://codeclimate.com/github/andela-ojoloko/CP1-News-feed-application/coverage)
[![Build Status](https://travis-ci.org/andela-ojoloko/CP1-News-feed-application.svg?branch=develop)](https://travis-ci.org/andela-ojoloko/CP1-News-feed-application)
<a href='https://coveralls.io/github/andela-ojoloko/CP1-News-feed-application?branch=develop'><img src='https://coveralls.io/repos/github/andela-ojoloko/CP1-News-feed-application/badge.svg?branch=develop' alt='Coverage Status' /></a>
# [Newsify](https://peaceful-hollows-52077.herokuapp.com)


----
## Description

This is a news feed application that enables you view news headlines from over 70 news sources.
The news sources and articles are gotten from [here](https://newsapi.org/#documentation)

## Table of Contents

  1. [Technology](#technology)
  1. [Installation and setup](#installation-and-setup).
  1. [contribute](#contribute)
  1. [FAQ](#faq)
  1. [License](#license)

## Technology

This project uses a host of modern technologies. The core ones are:

- ECMAScript 6: Also known as ES2015, this is the newest version of Javascript with next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

- [NodeJS](https://nodejs.org): NodeJS is a server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building web apps. Please visit [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
These were developed by Facebook and are used for building web pages that are structured as a collection of components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): This is a design architecture for building stable web apps with, among other things, a unidirectional flow of data. See [this link](https://facebook.github.io/flux/) 
for details.


## Installation and setup

Here are the steps you need to follow to run this project on your computer:
- **Install NodeJS**: You may visit [this link](https://nodejs.org/en/download/) for complete 
instructions on installing NodeJS on your computer.

- **Open a terminal/command prompt** on your computer and `cd` into your preferred path/location.

- **Clone this repo**: Enter this command in the terminal:

``` bash
git clone  https://github.com/andela-ojoloko/CP1-News-feed-application
```

- **Install dependencies** : Do so by running the following command:

``` bash
npm install
```
Note: `npm` is a component of NodeJS that serves as its package manager. So, it comes along with installing NodeJS.

- **Build the project**: This will compile all the project's source code into HTML, CSS and JS files. In 
the terminal/command prompt, enter the following command:

``` bash
npm run build
```

- **Run the project**: This will run the project on your computer so that you can browse it yourself. In the 
terminal/command prompt, enter the following command:

``` bash
npm start
```

- **Open a web browser of your choice and visit `http://localhost:5000`. Voila! It's alive!**


----
## Contribute

If you are interested in contributing to development of Newsify, that's really great!

Follow the instructions below to contribute.

- Fork the repository

- Make your change

- Commit your change to your forked repository 

- Provide a detailed commit description 

- Create a pull request

----
## FAQ

- **What if I want to use another port?**

That's easy. In the root of the project. create a file named `.env` and add the following line to it:

``` bash
PORT=<your_desired_port>
```

where <your\_desired\_port> is the port you want to use. So, if you want to use port `8080`, you will write:

``` bash 
PORT=8080
```
----
## License
This project is authored by [Joloko Oluwagbenga]() and is licensed 
for your use, modification, and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License).